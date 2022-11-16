const diagArr = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
]
const getDiagValue = (arr) => {
    let leftDiagTotal = 0;
    let rightDiagTotal = 0;
    for (let i = 0; i < arr.length; i++) {
        leftDiagTotal += arr[i][i];
        rightDiagTotal += arr[i][arr.length - i - 1]
    }
    return Math.abs(leftDiagTotal - rightDiagTotal)
}

console.log(getDiagValue(diagArr));