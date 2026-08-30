import assert from 'node:assert/strict';
import test from 'node:test';
import { CAPACITY_RELEASE_MARKER } from '../src/capacity-release-marker.js';

test('exports the capacity release marker after Linear readback', () => {
  assert.equal(CAPACITY_RELEASE_MARKER, 'capacity-released-after-linear-readback');
});
