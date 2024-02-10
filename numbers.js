function calculateDistance(x1, x2) {
  return Math.abs(x2 - x1);
}
console.log(calculateDistance(3, 5));

//
//

function calculateSegmentProduct(a, b, c) {
  return Math.abs((c - a) * (c - b));
}
console.log(calculateSegmentProduct(0, 5, 2)); // 6
console.log(calculateSegmentProduct(-1, 12, 7)); // 40

//
//

function calculateKilobytes(fileSizeInBytes) {
  return Math.floor(fileSizeInBytes / 1024);
}

console.log(calculateKilobytes(2048)); // 2
console.log(calculateKilobytes(5000)); // 4

//
//

function calculateSegments(lengthA, lengthB) {
  return Math.floor(lengthA / lengthB);
}

console.log(calculateSegments(10, 3)); // 3
console.log(calculateSegments(15, 4)); // 3

//
//

function calculateDigitSum(twoDigitNumber) {
  const odin = Math.floor(twoDigitNumber / 10);
  const dwa = (twoDigitNumber - (odin * 10));
  return (odin + dwa);
}

console.log(calculateDigitSum(47)); // 11
console.log(calculateDigitSum(89)); // 17

//
//

function swapHundredsAndTens(threeDigitNumber) {
    return `${Math.floor(threeDigitNumber/10)%10}${Math.floor(threeDigitNumber/100)}${threeDigitNumber % 10}`
}

console.log(swapHundredsAndTens(123)); // 213
console.log(swapHundredsAndTens(987)); // 897


export {calculateDistance, calculateSegmentProduct, calculateKilobytes, calculateSegments, calculateDigitSum, swapHundredsAndTens};
