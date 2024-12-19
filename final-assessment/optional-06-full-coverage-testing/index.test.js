import { test } from "node:test";
import assert from "node:assert";
import sum from "./index.js";

test("should return sum of two positive numbers", () => {
  const result = sum(2, 3);
  assert.strictEqual(result, 5);
});

test("should return 0 when one of the numbers is negative", () => {
  const result1 = sum(-1, 5);
  const result2 = sum(3, -4);
  const result3 = sum(-2, -3);
  assert.strictEqual(result1, 0);
  assert.strictEqual(result2, 0);
  assert.strictEqual(result3, 0);
});

test("should return 0 when one of the inputs is not a number", () => {
  const result1 = sum("a", 5);
  const result2 = sum(3, null);
  const result3 = sum(undefined, 3);
  const result4 = sum({}, 4);

  assert.strictEqual(result1, 0);
  assert.strictEqual(result2, 0);
  assert.strictEqual(result3, 0);
  assert.strictEqual(result4, 0);
});

test("should return 0 when both inputs are 0", () => {
  const result = sum(0, 0);
  assert.strictEqual(result, 0);
});

test("should return 0 when both inputs are negative numbers", () => {
  const result = sum(-5, -7);
  assert.strictEqual(result, 0);
});
