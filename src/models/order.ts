class Order {
    uuid: string;
    orderNum: string;
    fromCity: string;
    toCity: string;
    constructor(uuid: string, orderNum: string, fromCity: string, toCity: string) {
        this.uuid = uuid;
        this.orderNum = orderNum;
        this.fromCity = fromCity;
        this.toCity = toCity;
    }
}

export default Order;