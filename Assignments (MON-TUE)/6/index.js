// 1
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
// 2
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let num of array) {
    if (num % 2 === 0) {
        console.log(num);
    }
}
// 3
const array1 = [1, 2, 3, 4, 3, 5, 3];
const elementToDelete = 3;
const newArray = array1.filter(item => item !== elementToDelete);
console.log(newArray);
// 4
function power(base, exponent) {
    let result = 1;
    for (let i = 0; i < exponent; i++) {
        result *= base;
    }
    return result;
}
console.log(power(2, 3)); 
// 5
function sumOfDigits(number) {
    let sum = 0;
    while (number > 0) {
        sum += number % 10;
        number = Math.floor(number / 10);
    }
    return sum;
}
console.log(sumOfDigits(123)); 
// 6
const array3 = [10, 5, 20, 15, 30];
const largestNumber = Math.max(...array3);
console.log(largestNumber);
// 7
const array4 = [1, 2, 3, 4, 2, 5, 6, 3];
const duplicates = array4.filter((value, index, self) => self.indexOf(value) !== index);
console.log(duplicates);
// 8
function linearSearch(array5, target) {
    for (let i = 0; i < array5.length; i++) {
        if (array5[i] === target) {
            return i; 
        }
    }
    return -1; 
}

const array5 = [3, 6, 2, 8, 4, 1];
const target = 8;
console.log(linearSearch(array5, target));





