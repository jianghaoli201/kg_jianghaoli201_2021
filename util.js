var dict = {
    '1': 'One',
    '2': 'Two',
    '3': 'Three',
    '4': 'Four',
    '5': 'Five',
    '6': 'Six',
    '7': 'Seven',
    '8': 'Eight',
    '9': 'Nine',
    '0': 'Zero'
}

const convertNum = function convertNum(num) {
    let res = [];
    for (digit of Array.from(num)) {
        if (digit in dict) {
            res.push(dict[digit]);
        }
    }
    return res.join("");
}

const convertNums = function convertNums(arr) {
    return arr.map(convertNum).join(",");
}

module.exports = {
    convertNum,
    convertNums,
};