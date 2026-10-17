import { test } from 'node:test';
import assert from 'node:assert/strict';
import { scrambleFrame } from '../src/utils/scramble.ts';

test('decoding preserves spaces and punctuation while scrambling letters', () => {
  assert.equal(scrambleFrame('IT & security, 2007.', 0, () => 0), 'AA & AAAAAAAA, AAAA.');
});

test('decoding progressively locks the original prefix and resolves to the exact original text', () => {
  const text = 'Keep it secure.';
  const half = scrambleFrame(text, 0.5, () => 0);
  assert.equal(half.slice(0, Math.floor(text.length / 2)), text.slice(0, Math.floor(text.length / 2)));
  assert.equal(scrambleFrame(text, 1, () => 0), text);
  assert.equal(scrambleFrame(text, 2, () => 0), text);
});

test('decoding handles Unicode characters and empty headings', () => {
  assert.equal(scrambleFrame('Let’s talk.', 1), 'Let’s talk.');
  assert.equal(scrambleFrame('', 0), '');
});
