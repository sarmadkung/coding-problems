/**
 * Perf harness. Runs ONE problem's large-input case in this child process so the
 * parent can kill it if it never finishes. Prints a single JSON line.
 *
 *   node tests/_runperf.js <problemFile> <exportName> <problemNumber>
 */
'use strict';

const [file, name, num] = process.argv.slice(2);

try {
  const entry = require('./_perf.js')[Number(num)];
  if (!entry) {
    console.log(JSON.stringify({ error: 'no perf case defined' }));
    process.exit(0);
  }
  const mod = require(file);
  const target = mod[name];
  if (typeof target !== 'function') {
    console.log(JSON.stringify({ error: `${name} is not exported` }));
    process.exit(0);
  }

  const args = entry.args();
  const t0 = process.hrtime.bigint();
  const out = entry.run ? entry.run(target, args) : target(...args);
  const ms = Number(process.hrtime.bigint() - t0) / 1e6;

  // A validity check stops a constant-returning stub from "passing" on speed.
  const valid = entry.expect ? !!entry.expect(out, args) : true;
  console.log(JSON.stringify({ ms, valid }));
} catch (err) {
  console.log(JSON.stringify({ error: err.message }));
}
