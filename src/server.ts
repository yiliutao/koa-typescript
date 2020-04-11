import * as Koa from 'koa';
import * as Router from 'koa-router';
import { reqRoute } from './router';

const app = new Koa();
const router = new Router();

//监听请求
router.post("/*", async (ctx: Router.RouterContext) => {
    reqRoute(ctx);
});
router.get("/*", async (ctx: Router.RouterContext) => {
    reqRoute(ctx);
});

app.use(router.routes());
app.listen(9000);