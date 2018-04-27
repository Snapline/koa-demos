//上下文context对象
const Koa = require('koa');
const app = new Koa();

// app.use(async ctx => {
//   ctx; // 这是 Context
//   ctx.request; // 这是 koa Request
//   ctx.response; // 这是 koa Response
// });

const main = ctx => {
  ctx.response.body = 'Hello World';
};

app.use(main);
app.listen(3000);
