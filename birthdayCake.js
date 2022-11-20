/* You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.*/

function birthdayCakeCandles(candles) {
    // Write your code here
    const maxVal = Math.max(...candles)
    let maxValArr = [];
    for (let i = 0; i < candles.length; i++) {
        if (candles[i] === maxVal) {
            maxValArr.push(candles[i]);
        }
    }
    console.log(maxValArr)
}

birthdayCakeCandles([18, 90, 90, 13, 90, 75, 90, 8, 90, 43])