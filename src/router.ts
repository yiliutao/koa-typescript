import * as Router from 'koa-router';
import * as order from './controller/order';
import * as contract from './controller/contract';
import * as finance from './controller/finance';
import Response from './models/response';

const ModuleMap: any = {
    contract: contract,
    order: order,
    finance: finance,
};
//分发路由
function reqRoute(context: Router.RouterContext) {
    let path = context.path;
    let split = path.split("/");
    let result = ModuleMap[split[1]][split[2]](context.params);
    let rsp: Response = { rspCode: 1000, data: { list: result, pageNum: 1, total: 1 }, errorMsg: "" };
    context.body = rsp;
}

export {
    reqRoute,
}