import { after, test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { createServer } from 'vite';
import { JSDOM } from 'jsdom';
import React, { act } from 'react';

const server = await createServer({ server: { middlewareMode: true }, appType: 'custom' });
const { default: App } = await server.ssrLoadModule('/src/App.tsx');
after(async () => { await server.close(); });

async function mount(pathname, { reducedMotion = true } = {}) {
  const path = new URL(pathname, 'http://localhost').pathname;
  const file = path === '/' ? 'out/index.html' : 'out' + path + '/index.html';
  const dom = new JSDOM(await readFile(file, 'utf8'), { url: 'http://localhost' + pathname, pretendToBeVisual: true });
  const observed = [];
  const listeners = new Set();
  let reduce = reducedMotion;
  dom.window.matchMedia = () => ({
    get matches() { return reduce; },
    addEventListener: (_, callback) => listeners.add(callback),
    removeEventListener: (_, callback) => listeners.delete(callback),
  });
  class Observer {
    constructor(callback) { this.callback = callback; }
    observe(target) { observed.push({ target, callback: this.callback }); }
    disconnect() {}
  }
  const keys = ['window', 'document', 'navigator', 'HTMLElement', 'FormData', 'IntersectionObserver', 'requestAnimationFrame', 'cancelAnimationFrame', 'IS_REACT_ACT_ENVIRONMENT'];
  const original = new Map(keys.map((key) => [key, Object.getOwnPropertyDescriptor(globalThis, key)]));
  for (const key of ['window', 'document', 'navigator', 'HTMLElement', 'FormData']) {
    Object.defineProperty(globalThis, key, { configurable: true, writable: true, value: key === 'window' ? dom.window : dom.window[key] });
  }
  globalThis.requestAnimationFrame = dom.window.requestAnimationFrame.bind(dom.window);
  globalThis.cancelAnimationFrame = dom.window.cancelAnimationFrame.bind(dom.window);
  globalThis.IntersectionObserver = Observer;
  globalThis.IS_REACT_ACT_ENVIRONMENT = true;
  dom.window.scrollTo = () => {};
  const scrollTargets = [];
  dom.window.HTMLElement.prototype.scrollIntoView = function () { scrollTargets.push(this.id); };
  const errors = [];
  const originalConsoleError = console.error;
  console.error = (...args) => { errors.push(args.map(String).join(' ')); };
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
    reveal(selector) {
      const target = dom.window.document.querySelector(selector);
      const observer = observed.find((entry) => entry.target === target);
      assert.ok(observer, 'Heading has no reveal observer: ' + selector);
      observer.callback([{ target, isIntersecting: true }]);
    },
    reduceMotion() { reduce = true; for (const callback of listeners) callback(); },
    async close() {
      await act(async () => root.unmount());
      dom.window.close();
      console.error = originalConsoleError;
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
    assert.equal(page.document.querySelector('h1 .digital-source').textContent, 'IT that works. Security with a plan.');
    assert.ok(page.scrollTargets.includes('cybersecurity'));
    assert.equal(page.document.activeElement.id, 'cybersecurity');
    assert.match(page.document.title, /vCISO/);
    assert.deepEqual(page.errors, []);
  } finally { await page.close(); }
});

test('reduced motion keeps final headings readable and circuitry static', async () => {
  const page = await mount('/');
  try {
    assert.ok(page.document.querySelector('.circuit-trace'));
    assert.equal(page.document.querySelector('animateMotion'), null);
    assert.equal(page.document.querySelector('.digital-visual'), null);
    assert.equal(page.document.querySelector('h1 .digital-source').textContent, 'Keep your business running.');
    assert.deepEqual(page.errors, []);
  } finally { await page.close(); }
});

test('headings decode once on reveal; pausing stops circuitry and restores readable text', async () => {
  const page = await mount('/', { reducedMotion: false });
  try {
    assert.ok(page.document.querySelector('animateMotion'));
    assert.equal(page.document.querySelector('.digital-visual'), null);
    await act(async () => page.reveal('h1 .digital-text'));
    await act(async () => new Promise((resolve) => setTimeout(resolve, 90)));
    assert.ok(page.document.querySelector('h1 .digital-visual[aria-hidden="true"]'));
    assert.equal(page.document.querySelector('h1 .digital-source').textContent, 'Keep your business running.');
    await act(async () => new Promise((resolve) => setTimeout(resolve, 1100)));
    assert.equal(page.document.querySelector('h1 .digital-visual'), null);
    await act(async () => page.reveal('h1 .digital-text'));
    await act(async () => new Promise((resolve) => setTimeout(resolve, 65)));
    assert.equal(page.document.querySelector('h1 .digital-visual'), null, 'Heading must not scramble again');
    await act(async () => page.reveal('h1 .accent .digital-text'));
    assert.ok(page.document.querySelector('h1 .digital-visual'));
    await act(async () => page.document.querySelector('.motion-toggle').click());
    assert.equal(page.document.querySelector('animateMotion'), null);
    assert.equal(page.document.querySelector('.digital-visual'), null);
    assert.match(page.document.querySelector('.motion-toggle').textContent, /Resume motion/);
    await act(async () => page.document.querySelector('.motion-toggle').click());
    assert.ok(page.document.querySelector('animateMotion'));
    await act(async () => page.reduceMotion());
    assert.equal(page.document.querySelector('animateMotion'), null);
    assert.equal(page.document.querySelector('.digital-visual'), null);
    assert.deepEqual(page.errors, []);
  } finally { await page.close(); }
});

test('contact-strip heading keeps the same character layout when decoding finishes', async () => {
  const page = await mount('/', { reducedMotion: false });
  try {
    const heading = page.document.querySelector('.contact-strip h2 .digital-text');
    const cells = Array.from(heading.querySelectorAll('.digital-cell'));
    const words = Array.from(heading.querySelectorAll('.digital-word'));
    const reserves = cells.map((cell) => cell.querySelector('.digital-reserve'));
    await act(async () => page.reveal('.contact-strip h2 .digital-text'));
    assert.ok(heading.querySelector('.digital-visual'));
    await act(async () => new Promise((resolve) => setTimeout(resolve, 1100)));
    assert.equal(heading.querySelector('.digital-visual'), null);
    assert.deepEqual(Array.from(heading.querySelectorAll('.digital-cell')), cells);
    assert.deepEqual(Array.from(heading.querySelectorAll('.digital-word')), words);
    assert.deepEqual(cells.map((cell) => cell.querySelector('.digital-reserve')), reserves);
    assert.equal(heading.querySelector('.digital-display').textContent, 'What does your business need?');
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
