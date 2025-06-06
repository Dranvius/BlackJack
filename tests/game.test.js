import test from 'node:test';
import assert from 'node:assert/strict';
import { botLogic } from '../game.js';

test('botLogic uses 11 when total is below 11', () => {
  assert.strictEqual(botLogic(5), 11);
});

test('botLogic uses 1 when total is 11 or higher', () => {
  assert.strictEqual(botLogic(11), 1);
  assert.strictEqual(botLogic(20), 1);
});
