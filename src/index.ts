import * as koa from 'koa';
import * as Router from 'koa-router';

import googleFlow from './google-flow/webhook';

const app = new koa();
const router = new Router();
const port = process.env.PORT || 3000;

router.use('/google-flow', googleFlow.routes(), googleFlow.allowedMethods());
app
  .use(router.routes())
  .use(router.allowedMethods());
app.listen(3000, () => {
  console.log(`[Web Server] Server start at ${port}`);
});
