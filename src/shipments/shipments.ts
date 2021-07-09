import { FastifyInstance } from 'fastify';
import noRatesList from './responses/no-rates-list.json';
import fedexErrorResponse from './responses/fedex-error-response.json'

export async function shipments(app: FastifyInstance) {
  app.all('/shipments/:any', async () => {
    console.log('Returning mock no rates lists');
    return fedexErrorResponse;
  });
}
