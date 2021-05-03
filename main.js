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
    var w;
    if (word.length > 1) {
        w = word.split("");
    } else {
        return Array(word);
    }
    return w;
}

function convertNum(arr) {
    var res = '';
    var splitArr = new Array(arr.length);

    for (i = 0; i < arr.length; i++) {
        splitArr[i] = convertWordToChar(arr[i]);
    }

    for (i = 0; i < splitArr.length; i++) {
        for (j = 0; j < splitArr[i].length; j++) {
            if (!(splitArr[i][j] in dict)) {
                console.log("Invalid input! Please use numbers.");
                return
            } 
            res += dict[splitArr[i][j]];
        }
        res += ',';
    }
    console.log(res)
    return res
}

convertNum(arr);