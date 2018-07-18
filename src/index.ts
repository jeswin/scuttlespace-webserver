import Koa = require("koa");
import bodyParser = require("koa-bodyparser");
import router = require("koa-route");
import * as scuttlespace from "./scuttlespace";
import { IUser } from "./types";
import * as user from "./user";

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

const app = new Koa();
app.use(bodyParser());

/* tslint:disable */
declare module "koa" {
  interface Context {
    user: IUser;
  }
}
/* tslint:enable */

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
