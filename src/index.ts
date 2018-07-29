import Koa = require("koa");
import bodyParser = require("koa-bodyparser");
import router = require("koa-route");
import urlMappingMiddleware from "scuttlespace-middleware-urlmapping";
import getApolloClient from "./apollo-client";
import * as config from "./config";
import * as scuttlespace from "./scuttlespace";
import { IUser } from "./types";
import * as user from "./user";

/* tslint:disable */
declare module "koa" {
  interface Context {
    user: IUser;
  }
}
/* tslint:enable */

/*
  Supported urls
  --------------
  /
  /posts
  /projects
  /events
  /resume
  /todos
  /lessons

  Url rewrites
  ------------
  Before getting called, custom domain paths are rewritten with the rewrite middleware.
  So https://jeswin.org/posts/hello -> https://scuttle.space/jeswin/posts/hello
*/

async function init() {
  const apolloClient = await getApolloClient({
    hostname: config.graphqlHostname,
    port: config.graphqlPort
  });
  const app = new Koa();
  app.use(bodyParser());
  app.use(urlMappingMiddleware({ domain: config.domain, apolloClient }));

  [
    router.get("/", scuttlespace.home),
    router.get("/:username", user.home)
    // router.get("/:username/posts", pub.home),
    // router.get("/:username/posts/category/:category", pub.category),
    // router.get("/:username/posts/:post", pub.item),
    // router.get("/:username/resume", resume.home),
    // router.get("/:username/projects", projects.home),
    // router.get("/:username/bookmarks", bookmarks.home),
    // router.get("/:username/bookmarks/category/:category", bookmarks.category)
  ].forEach(r => app.use(r));

  app.listen(3000);

  console.log("Listening on 3000");
}

init();
