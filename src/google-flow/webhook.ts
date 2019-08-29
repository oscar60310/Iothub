import * as Router from 'koa-router';
import { FullfillmentRequest, FullFillmentResponse } from './webhook.model';
const router = new Router();

router.post('/webhook', ctx => {
  const request = ctx.request.body as FullfillmentRequest;
  const response = {
    fulfillmentText: `Hooks work! ${request.responseId}`,
  } as FullFillmentResponse;
  ctx.body = response;
});

export default router;
