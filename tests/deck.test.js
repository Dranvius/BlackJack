import test from 'node:test';
import assert from 'node:assert/strict';
import { mazo, fisherYatesShuffle, Carta } from '../deck.js';

test('mazo returns 52 Carta objects', () => {
  const deck = mazo();
  assert.strictEqual(deck.length, 52);
  assert.ok(deck.every(c => c instanceof Carta));
});

test('fisherYatesShuffle maintains size and shuffles order', () => {
  const deck = mazo();
  const copy = deck.slice();
  fisherYatesShuffle(deck);
  assert.strictEqual(deck.length, 52);
  const sameOrder = deck.every((c, i) => c === copy[i]);
  assert.strictEqual(sameOrder, false);
});
