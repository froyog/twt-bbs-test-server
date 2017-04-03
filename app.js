const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const cors = require("koa-cors");
const controller = require("./controller");
const app = new Koa();

app.use(async (ctx, next) => {
  console.log(`Process ${ctx.request.method} ${ctx.request.url}`);
  await next();
});

app.use(async function(ctx, next)  {
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,HEAD');
    var headers = ctx.get('access-control-request-headers');
    ctx.set('Access-Control-Allow-Headers', headers);
    await next();
});

app.use(bodyParser());

app.use(controller());

app.listen(3001);
console.log("app started at port 3001");
