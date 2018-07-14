import Koa = require("koa");
import bodyParser = require("koa-bodyparser");
import router = require("koa-route");
import * as site from "./site";

const app = new Koa();
app.use(bodyParser());

[
  router.get("/", site.home)
  // router.get("/:username", user.home),
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
