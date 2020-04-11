import Order from '../models/order';

function getAllOrders(): Array<Order> {
    let result: Array<Order> = [];
    result.push({ uuid: "2222", orderNum: "222", fromCity: "shanghai", toCity: "beijing" });
    return result;
}

export {
    getAllOrders,
}