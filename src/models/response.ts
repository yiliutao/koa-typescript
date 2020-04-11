interface RspData {
    list: Array<any>;
    pageNum: number;
    total: number;
}
interface Response {
    rspCode: number;
    data: RspData;
    errorMsg: string;
}

export default Response;