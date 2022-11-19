/* const maxMinInt = arr => {
    let sum = arr.reduce(function (a, e) {
        return a + e;
    });
    let min = 0;
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        let exception = arr.slice(i, i + 1);
        if (i === 0) {
            min = sum - exception;
        }
        if (sum - exception < min) {
            min = sum - exception;
        }
        if (sum - exception > max) {
            max = sum - exception;
        }
    }
    console.log(min, max);
} */


const maxMinInt = arr => {
    const total = arr.reduce((a, b) => a + b);
    let max = 0;
    let min = 0;
    for (let i = 0; i < arr.length; i++) {
        const slicedNumber = arr.slice(i, i + 1);
        if (i === 0) {
            min = total - slicedNumber;
        }
        if (total - slicedNumber < min) {
            min = total - slicedNumber
        }
        if (total - slicedNumber > max) {
            max = total - slicedNumber
        }
    }

    console.log(max);
    console.log(min)

}

maxMinInt([0, 2, 3, 4, 5])