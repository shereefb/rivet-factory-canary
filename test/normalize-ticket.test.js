import assert from 'node:assert/strict';
import test from 'node:test';
import { normalizeTicket } from '../src/normalize-ticket.js';

test('normalizes a ticket label for durable identifiers', () => {
  assert.equal(normalizeTicket('  rivet 42  '), 'RIVET-42');
  assert.equal(normalizeTicket('\trivet\t  42\n'), 'RIVET-42');
});
