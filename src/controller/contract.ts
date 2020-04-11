import Contract from '../models/contract';

function getAllContract(): Array<Contract> {
    let result: Array<Contract> = [];
    result.push({ uuid: "123456", contractNum: "123456", companyFrom: "shanghai", companyTo: "beijing" });
    return result;
}

export {
    getAllContract,
}