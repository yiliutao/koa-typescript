import Finance from '../models/finance';

function getAllFI(): Array<Finance> {
    let result: Array<Finance> = [];
    result.push({ uuid: "11111", financeNum: "11111", amount: 500 });
    return result;
}

export {
    getAllFI,
}