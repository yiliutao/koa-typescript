import Contract from '../models/contract';

function getAllContract(): Array<Contract> {
    let result: Array<Contract> = [];
    let contractInst: Contract = new Contract("222", "123456", "shanghai", "beijing");
    result.push(contractInst);
    return result;
}

export {
    getAllContract,
}