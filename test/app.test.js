const test = require('node:test');
const assert = require('node:assert');
const app = require('../app');

test('GET /health returns status ok', async () => {
  const server = await new Promise((resolve) => {
    const s = app.listen(0, () => resolve(s));
  });

  try {
    const { port } = server.address();
    const res = await fetch(`http://localhost:${port}/health`);
    const body = await res.json();

    assert.strictEqual(res.status, 200);
    assert.deepStrictEqual(body, { status: 'ok' });
  } finally {
    server.close();
  }
});