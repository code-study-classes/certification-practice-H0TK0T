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
  return Number(`${Math.floor(threeDigitNumber / 10) % 10}${Math.floor(threeDigitNumber / 100)}${threeDigitNumber % 10}`);
}

console.log(swapHundredsAndTens(123)); // 213
console.log(swapHundredsAndTens(987)); // 897

//
//

function getFullHours(seconds) {
  return Math.floor(seconds / 3600);
}

console.log(getFullHours(3600)); // 1
console.log(getFullHours(7200)); // 2
console.log(getFullHours(18000)); // 5

//
//

function getHundredsDigit(number) {
  if (number >= 1000 && number < 10000) {
    const perviy = (number % 1000);
    return Math.floor(perviy / 100);
  }
  return 0;
}

console.log(getHundredsDigit(1234)); // 2
console.log(getHundredsDigit(9876)); // 7
console.log(getHundredsDigit(500)); // 0

//
//

function getDayOfWeek(dayOfYear) {
  const per = Math.floor(dayOfYear / 7);
  return (dayOfYear - (per * 7));
}

console.log(getDayOfWeek(1)); // 1
console.log(getDayOfWeek(10)); // 3
console.log(getDayOfWeek(365)); // 2

//
//

function countSquares(a, b, c) {
  const one = Math.floor(a / c);
  const two = Math.floor(b / c);
  return (one * two);
}

console.log(countSquares(6, 4, 2)); // 4
console.log(countSquares(8, 5, 3)); // 2
console.log(countSquares(10, 10, 5)); // 4

export {
  calculateDistance, calculateSegmentProduct, calculateKilobytes,
  calculateSegments, calculateDigitSum, swapHundredsAndTens,
  getFullHours, getHundredsDigit, getDayOfWeek, countSquares,
};
