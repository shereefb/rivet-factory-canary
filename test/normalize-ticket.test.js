import assert from 'node:assert/strict';
import test from 'node:test';
import { normalizeTicket } from '../src/normalize-ticket.js';

test('normalizes a ticket label for durable identifiers', () => {
  assert.equal(normalizeTicket('  rivet 42  '), 'RIVET-42');
});

test('collapses internal whitespace runs to one hyphen', () => {
  assert.equal(normalizeTicket('rivet   42'), 'RIVET-42');
  assert.equal(normalizeTicket('rivet\t42\nalpha'), 'RIVET-42-ALPHA');
});

test('preserves non-whitespace separators', () => {
  assert.equal(normalizeTicket('  rivet-42  '), 'RIVET-42');
});
