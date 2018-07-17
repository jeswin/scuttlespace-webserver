import { Context } from "koa";

export async function home(ctx: Context) {
  ctx.body = "hello";
}
