const myArr = [1, 1, 0, -1, -1];
const myFunc = (arr) => {
    let positiveValArr = [];
    let negativeValArr = [];
    let zeroValArr = [];
    let ratioArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            negativeValArr.push(arr[i])
        } else if (arr[i] > 0) {
            positiveValArr.push(arr[i])
        } else {
            zeroValArr.push(arr[i])
        }
    }
    ratioArr.push((positiveValArr.length / arr.length).toFixed(6));
    ratioArr.push((negativeValArr.length / arr.length).toFixed(6));
    ratioArr.push((zeroValArr.length / arr.length).toFixed(6));
    return ratioArr;
};
console.log(myFunc(myArr))