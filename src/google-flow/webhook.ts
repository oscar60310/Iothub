import * as Router from 'koa-router';
const router = new Router();

router.post('/webhook', ctx => {
  ctx.body = '443';
});

export default router;
