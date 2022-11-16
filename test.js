const myFunc = (alice, bob) => {
    let equal = [];
    for (let i = 0; i < alice.length; i++) {
        if (alice[i] > bob[i]) {
            equal.push(1)
        } else if (alice[i] < bob[i]) {
            equal.push(1)
        }
    }
    return equal
    // return [a, b]
}
const arr1 = [1, 2, 3]
const arr2 = [3, 2, 1]
// console.log(myFunc(arr1, arr2))

function compareTriplets(a, b) {
    let alice = 0;
    let bob = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            alice++;
        } else if (a[i] < b[i]) {
            bob++;
        }
    }
    return [alice, bob];
}
console.log(compareTriplets([17, 18, 30], [99, 16]));