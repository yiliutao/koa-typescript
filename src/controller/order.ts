import Order from '../models/order';

function getAllOrders(): Array<Order> {
    let result: Array<Order> = [];
    let orderInst: Order = new Order("2222", "2222", "shanghai", "beijing");
    result.push(orderInst);
    console.log("aa");
    return result;
}

export {
    getAllOrders,
}