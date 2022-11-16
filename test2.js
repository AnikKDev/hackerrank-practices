function generateDoc(c, d) {
    let charArr = [];
    let docArr = [];
    for (let i = 0; i < c.length; i++) {
        charArr.push(c[i]);
    }
    for (let i = 0; i < d.length; i++) {
        docArr.push(d[i]);

    }
    let result = false;
    if (charArr.length === docArr.length) {
        for (let i = 0; i < charArr.length; i++) {
            if (charArr.indexOf(docArr[i]) > 0) {
                result = true
            }
            else {
                result = false
            }
        }
    } else {
        result = false
    }
    return result
}
let arr1 = 'helloworld';
let arr2 = 'helloworldddddd';
console.log(generateDoc(arr1, arr2))