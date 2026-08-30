import assert from 'node:assert/strict';
import test from 'node:test';
import { DISCUSSION_MARKER } from '../src/discussion-marker.js';

test('exports the discussion marker value', () => {
  assert.equal(DISCUSSION_MARKER, 'linear-comment-seen');
});
