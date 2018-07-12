import Koa = require("koa");
import bodyParser = require("koa-bodyparser");
const app = new Koa();
app.use(bodyParser());

app.use(async ctx => {
  const { username, mod, template } = await hosting.extractDestination(
    ctx.hostname,
    ctx.path
  );

  ctx.username = username;
  ctx.mod = mod;

  ctx.body = "Hello World";
});

app.listen(3000);
