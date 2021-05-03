var arr = process.argv.slice(2);
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

function convertWordToChar(word) {
    if (word.length > 1) {
        return word.split("");
    } else {
        return Array(word);
    }
}

function convertNum(arr) {
    let splitArr = new Array(arr.length);
    let res = [];

    for (i = 0; i < arr.length; i++) {
        splitArr[i] = convertWordToChar(arr[i]);
    }

    for (i = 0; i < splitArr.length; i++) {
        let word = [];
        for (j = 0; j < splitArr[i].length; j++) {
            if (!(splitArr[i][j] in dict)) {
                console.log("Invalid input! Please use numbers.");
                return
            } 
            word.push(dict[splitArr[i][j]]);
        }
        res.push(word.join(""));
    }
    console.log(res.join(","))
    return res
}

convertNum(arr);