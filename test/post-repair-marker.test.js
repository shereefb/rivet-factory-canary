import assert from 'node:assert/strict';
import test from 'node:test';
import { POST_REPAIR_MARKER } from '../src/post-repair-marker.js';

test('exports the successor marker after Linear repair', () => {
  assert.equal(POST_REPAIR_MARKER, 'successor-started-after-linear-repair');
});
