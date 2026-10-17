import { after, test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { createServer } from 'vite';
import { JSDOM } from 'jsdom';
import React, { act } from 'react';

const server = await createServer({ server: { middlewareMode: true }, appType: 'custom' });
const { default: App } = await server.ssrLoadModule('/src/App.tsx');
after(async () => { await server.close(); });

async function mount(pathname) {
  const path = new URL(pathname, 'http://localhost').pathname;
  const file = path === '/' ? 'out/index.html' : 'out' + path + '/index.html';
  const dom = new JSDOM(await readFile(file, 'utf8'), { url: 'http://localhost' + pathname, pretendToBeVisual: true });
  const keys = ['window', 'document', 'navigator', 'HTMLElement', 'FormData', 'requestAnimationFrame', 'cancelAnimationFrame', 'IS_REACT_ACT_ENVIRONMENT'];
  const original = new Map(keys.map((key) => [key, Object.getOwnPropertyDescriptor(globalThis, key)]));
  for (const key of ['window', 'document', 'navigator', 'HTMLElement', 'FormData']) {
    Object.defineProperty(globalThis, key, { configurable: true, writable: true, value: key === 'window' ? dom.window : dom.window[key] });
  }
  globalThis.requestAnimationFrame = dom.window.requestAnimationFrame.bind(dom.window);
  globalThis.cancelAnimationFrame = dom.window.cancelAnimationFrame.bind(dom.window);
  globalThis.IS_REACT_ACT_ENVIRONMENT = true;
  dom.window.scrollTo = () => {};
  const scrollTargets = [];
  dom.window.HTMLElement.prototype.scrollIntoView = function () { scrollTargets.push(this.id); };
  const errors = [];
  const { hydrateRoot } = await import('react-dom/client');
  let root;
  await act(async () => {
    root = hydrateRoot(dom.window.document.getElementById('root'), React.createElement(App), { onRecoverableError: (error) => errors.push(error.message) });
  });
  return {
    document: dom.window.document,
    window: dom.window,
    scrollTargets,
    errors,
    async close() {
      await act(async () => root.unmount());
      dom.window.close();
      for (const [key, descriptor] of original) {
        if (descriptor) Object.defineProperty(globalThis, key, descriptor);
        else delete globalThis[key];
      }
    },
  };
}

test('prerendered home hydrates and navigation supports menu controls and service anchors', async () => {
  const page = await mount('/');
  try {
    assert.deepEqual(page.errors, []);
    const toggle = page.document.querySelector('.menu-toggle');
    await act(async () => toggle.click());
    assert.equal(toggle.getAttribute('aria-expanded'), 'true');
    assert.equal(page.document.getElementById('mobile-menu').hidden, false);
    await act(async () => toggle.dispatchEvent(new page.window.KeyboardEvent('keydown', { key: 'Escape', bubbles: true })));
    assert.equal(toggle.getAttribute('aria-expanded'), 'false');
    assert.equal(page.document.activeElement, toggle);
    await act(async () => page.document.querySelector('a[href="/services#cybersecurity"]').click());
    await new Promise((resolve) => setTimeout(resolve, 40));
    assert.equal(page.window.location.pathname, '/services');
    assert.equal(page.window.location.hash, '#cybersecurity');
    assert.equal(page.document.querySelector('h1').textContent, 'IT that works. Security with a plan.');
    assert.ok(page.scrollTargets.includes('cybersecurity'));
    assert.equal(page.document.activeElement.id, 'cybersecurity');
    assert.match(page.document.title, /vCISO/);
    assert.deepEqual(page.errors, []);
  } finally { await page.close(); }
});

test('contact hydration ignores success query strings and preserves input after delivery failure', async () => {
  const page = await mount('/contact?success=true');
  const originalFetch = globalThis.fetch;
  try {
    assert.deepEqual(page.errors, []);
    assert.equal(page.document.querySelector('.form-feedback'), null);
    const form = page.document.querySelector('.contact-form');
    assert.equal(form.checkValidity(), false);
    form.elements.name.value = 'Test owner';
    form.elements.email.value = 'owner@example.com';
    form.elements.service.value = 'IT support';
    form.elements.details.value = 'Help with account access.';
    assert.equal(form.checkValidity(), true);
    let requests = 0;
    globalThis.fetch = async () => { requests++; return new Response('', { status: 500 }); };
    await act(async () => form.dispatchEvent(new page.window.Event('submit', { bubbles: true, cancelable: true })));
    assert.equal(requests, 1);
    assert.match(page.document.querySelector('[role="alert"]').textContent, /couldn’t confirm/);
    assert.equal(form.elements.name.value, 'Test owner');
    assert.equal(page.document.querySelector('[type="submit"]').disabled, false);
    globalThis.fetch = async () => new Response('', { status: 200 });
    await act(async () => form.dispatchEvent(new page.window.Event('submit', { bubbles: true, cancelable: true })));
    assert.match(page.document.querySelector('[role="status"]').textContent, /message was submitted/);
    assert.equal(form.elements.name.value, '');
    assert.equal(form.elements.service.value, '');
    assert.deepEqual(page.errors, []);
  } finally {
    globalThis.fetch = originalFetch;
    await page.close();
  }
});
