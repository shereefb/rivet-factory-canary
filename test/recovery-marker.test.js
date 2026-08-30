import assert from 'node:assert/strict';
import test from 'node:test';
import { RECOVERY_MARKER } from '../src/recovery-marker.js';

test('exports the repaired slot-refill recovery marker', () => {
  assert.equal(RECOVERY_MARKER, 'linear-repaired');
});
