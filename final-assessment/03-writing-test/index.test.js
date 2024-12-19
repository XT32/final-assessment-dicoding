import { sum } from './index.js';
import assert from 'node:assert';
import { test } from 'node:test';

test('sum adds two numbers correctly', () => {
  assert.strictEqual(sum(2, 3), 5, 'sum of 2 and 3 should be 5');
  assert.strictEqual(sum(-1, 1), 0, 'sum of -1 and 1 should be 0');
  assert.strictEqual(sum(0, 0), 0, 'sum of 0 and 0 should be 0');
  assert.strictEqual(sum(-5, -5), -10, 'sum of -5 and -5 should be -10');
});
