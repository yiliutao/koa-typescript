class Contract {
    uuid: string;
    contractNum: string;
    companyFrom: string;
    companyTo: string;
    constructor(uuid: string, contractNum: string, companyFrom: string, companyTo: string) {
        this.uuid = uuid;
        this.contractNum = contractNum;
        this.companyFrom = companyFrom;
        this.companyTo = companyTo;
    }
}
export default Contract;