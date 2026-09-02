import assert from 'node:assert/strict';
import test from 'node:test';
import { FINALIZATION_MARKER } from '../src/finalization-marker.js';

test('exports the exact-head finalization marker', () => {
  assert.equal(FINALIZATION_MARKER, 'one-review-after-final-proof');
});
