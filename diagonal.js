function diagonalDifference(arr) {
    // Write your code here
    let leftDiagonalSum = 0;
    let rightDiagonalSum = 0;

    for (let i = 0; i < Number(arr.length); i++) {
        leftDiagonalSum += arr[i][i]
        console.log(leftDiagonalSum)
        rightDiagonalSum += arr[i][arr.length - 1 - i]
    }
    return Math.abs(leftDiagonalSum - rightDiagonalSum);
}

const myArr = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9]
]
// diagonalDifference(myArr)
console.log(myArr.length - 1 - 0)