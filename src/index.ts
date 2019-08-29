import * as koa from 'koa';

const app = new koa();
const port = process.env.PORT || 3000;
app.listen(3000, () => {
  console.log(`[Web Server] Server start at ${port}`);
});
