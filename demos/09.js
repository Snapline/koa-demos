//多个中间件会形成一个栈结构（middle stack），以"先进后出"（first-in-last-out）的顺序执行。
const Koa = require('koa');
const app = new Koa();

const one = (ctx, next) => {
  console.log('>> one');
  next();
  console.log('<< one');
}

const two = (ctx, next) => {
  console.log('>> two');
  next();
  console.log('<< two');
}

const three = (ctx, next) => {
  console.log('>> three');
  next();
  console.log('<< three');
}

app.use(one);
app.use(two);
app.use(three);

app.listen(3000);

//如果把two函数里面next()这一行注释掉再执行，返回结果顺序是one two two one
