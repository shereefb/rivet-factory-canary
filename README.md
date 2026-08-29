# Rivet Factory canary

This private repository is a deterministic deployment canary for Rivet Factory.

The acceptance test intentionally fails on main. The approved repair is limited
to converting internal whitespace in normalizeTicket to one hyphen while
preserving its trim and uppercase behavior.

Run `npm test` to execute the acceptance test.
