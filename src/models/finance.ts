class Finance {
    uuid: string;
    financeNum: string;
    amount: number;
    constructor(uuid: string, financeNum: string, amount: number) {
        this.uuid = uuid;
        this.financeNum = financeNum;
        this.amount = amount;
    }
}

export default Finance;