import Finance from '../models/finance';

function getAllFI(): Array<Finance> {
    let result: Array<Finance> = [];
    let FIInst: Finance = new Finance("1111", "1111", 500);
    result.push(FIInst);
    return result;
}

export {
    getAllFI,
}