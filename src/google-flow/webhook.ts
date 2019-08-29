import * as Router from 'koa-router';
import { FullfillmentRequest } from './webhook.model';
import IntentHandler from './intents';
const router = new Router();

router.post('/webhook', ctx => {
  const request = ctx.request.body as FullfillmentRequest;
  ctx.body = IntentHandler(request);
});

export default router;
