import { Context } from "koa";
import * as feedService from "scuttlespace-service-feed";
import * as cmsService from "scuttlespace-service-cms";
import * as templates from "../templates";

export async function home(ctx: Context, username: string) {
  const templateName = (ctx.user as any).template;
  const template = await templates.getTemplate(templateName);
  
  const feed = await feedService.getFeed(username);
  const blogroll = await cmsService.getContent("blogroll");
  const dateLinks = await feedService.getDateLinks(username);
  const pinned = await cmsService.getContent("pinned");
  
  ctx.body = await template.user.home({ blogroll, dateLinks, feed, pinned });  
}
