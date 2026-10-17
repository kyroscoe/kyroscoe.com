import { test } from 'node:test';
import assert from 'node:assert/strict';
import { submitContact } from '../src/utils/contact.ts';

test('contact submission URL-encodes message content for Netlify', async () => {
  const data = new FormData();
  data.set('name', 'A & B');
  data.set('email', 'owner@example.com');
  data.set('details', 'Email + account access\nLine two');
  data.set('bot-field', '');
  await submitContact(data, async (url, options) => {
    assert.equal(url, '/');
    assert.equal(options.method, 'POST');
    assert.equal(options.headers['Content-Type'], 'application/x-www-form-urlencoded');
    const body = new URLSearchParams(options.body);
    assert.equal(body.get('form-name'), 'contact');
    assert.equal(body.get('name'), 'A & B');
    assert.equal(body.get('details'), 'Email + account access\nLine two');
    assert.equal(body.get('bot-field'), '');
    assert.ok(options.signal instanceof AbortSignal);
    return new Response('', { status: 200 });
  });
});

test('contact submission rejects server failures instead of reporting success', async () => {
  await assert.rejects(() => submitContact(new FormData(), async () => new Response('', { status: 500 })), /delivery failed/);
});

test('contact submission propagates network failures', async () => {
  await assert.rejects(() => submitContact(new FormData(), async () => { throw new Error('Network unavailable'); }), /Network unavailable/);
});

test('contact submission uses a fixed form identity', async () => {
  const data = new FormData();
  data.set('form-name', 'unexpected');
  await submitContact(data, async (_, options) => {
    assert.equal(new URLSearchParams(options.body).get('form-name'), 'contact');
    return new Response('', { status: 200 });
  });
});
