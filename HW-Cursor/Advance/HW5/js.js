//func 1

// const arrayLength = 15;
// function getRandomArray(length, min, max) {
//     const numbersForFunc1 = Array(arrayLength).fill(null);
//     let finishArray = [];
//     numbersForFunc1.forEach((number) => {
//         number =  Math.floor(Math.random() * (max - min + 1) + min);
//         finishArray.push(number);
//     });
//     return finishArray;
// }
// console.log(getRandomArray(arrayLength, 0, 100));
//or
const arrayLength = 15;
function getRandomArray(length, min, max) {
    return Array
       .from({ length: length })
       .map(() => Math.floor(Math.random() * (max - min + 1) + min))
}
console.log(getRandomArray(arrayLength, 0, 100));

//func 2
function getModa(...numbers) {
  const result1 = [];
  const test = numbers.sort((a,b) => a - b);
  for(let i = 0; i < test.length; i++) {
    if(test[i] === test[i + 1]) {
      result1.push(test[i]);
    } 
  }
  const result2 = [...result1];
  if(result2.length == 1) {
    return(result2);
  } else {
    for(let j = 0; j < result2.length; j++) {
      if(result2[j] === result2[j + 1]) {
        return(result2[j]);
      }
    }
  }
}
console.log(getModa(-4, 10,13, -10, 13, 65, 48, 50, -10, 13));
//func 3
function getAverage(...numbersForFunc3) {
    let average = [];
    const newNumbers = [...numbersForFunc3]; //copy numbers
    let indexes = 0;
    const lastNumber = newNumbers[newNumbers.length - 1]; //find last number
    const latNumberIndex = numbersForFunc3.lastIndexOf(lastNumber); // find index of last number in numbers
    indexes = 1 + latNumberIndex; //how much numbers

    const sum = numbersForFunc3.reduce((acc, curr) => acc + curr, 0);
    average = sum / indexes;
    return average;
}
console.log(getAverage(10,3,70,14));
//func 4
function getMedian(...numbers) {
  const sortedNumbers = numbers.sort((a,b) => a-b);
  const medianIndex = Math.floor(sortedNumbers.length/2);
  return sortedNumbers[medianIndex];
}
console.log(getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));
//func 5
function filterEvenNumbers(...numbers) {
  const result = numbers.filter(number => number%2);
  return result;
}
console.log(filterEvenNumbers(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));
//func 6
function countPositiveNumbers(...numbersForFunc6) {
   return numbersForFunc6.filter(number =>  number > 0).length
}
console.log(countPositiveNumbers(1, -2, 3, -4, -5, 6));
//func 7
function getDividedByFive(...numbersForFunc7) {
  const result = numbersForFunc7.filter(number => number/5 == Math.round(number/5));
  return result;
}
console.log(getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 25));
//func8
function replaceBadWords(string) {//пока что проверяет по одному предложению("Are you fucking kidding? It's bullshit!") не прокатит, но это без regexp
  const badWords1 = "shit";
  const badWords2 = "fuck";
  if(string.search(badWords1) != -1) {
    return string.replace(badWords1, "*****");
  } else {
    return string.replace(badWords2, "*****");
  }
}
console.log(replaceBadWords("Are you fucking kidding?"));

//func 9 пытался сделать с помощью forEach но получаеться [["c", "o", "m"], ["o", "m", "m"].....
const a = "commander";
function divideByThree(word) {
  let result = [];
  for(let i = 0; i < word.length; i = i + 3){
    result.push(word.slice(i, i + 3));
  }
  return result;
}
console.log(divideByThree(a));

//func 10 