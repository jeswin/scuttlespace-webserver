import { Context } from "koa";
import * as cmsService from "scuttlespace-service-cms";
import * as feedService from "scuttlespace-service-feed";
import * as templates from "../templates";

export async function home(ctx: Context) {
  const username = ctx.user.username;
  const templateName = ctx.user.template;
  const template = await templates.getTemplate(templateName);

  const feed = await feedService.getFeed(username);
  const dateLinks = await feedService.getDateLinks(username);
  const pinned = await feedService.getPinned(username);
  const blogroll = await cmsService.getLinks(username, "blogroll");

  ctx.body = await template.user.home({ blogroll, dateLinks, feed, pinned });
}
