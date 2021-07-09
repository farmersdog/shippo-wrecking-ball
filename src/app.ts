import fastify from 'fastify';
import proxy from 'fastify-http-proxy';
import { shipments } from './shipments';

const PORT = 8080;
const app = fastify({ logger: true });

app.register(shipments);

const REAL_SHIPPO_URL = 'https://api.goshippo.com';
app.register(proxy, {
  upstream: REAL_SHIPPO_URL,
  prefix: '/addresses',
  rewritePrefix: '/addresses',
});

(async () => {
  try {
    await app.listen(PORT, '0.0.0.0');
    console.log(`Shippo wrecking ball started on http://localhost:${PORT}`);
  } catch (error) {
    console.error('Cannot start app', { error });
  }
})();
