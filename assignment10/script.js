// 1. Print all natural numbers from 1 to n 
function printNaturalNumbers(n1) {
    let i1 = 1;
    while (i1 <= n1) {
        console.log(i1);
        i1++;
    }
}

// 2. Print all natural numbers in reverse (from n to 1) 
function printNaturalNumbersReverse(n2) {
    let i2 = n2;
    while (i2 >= 1) {
        console.log(i2);
        i2--;
    }
}

// 3. Print all alphabets from a to z 
function printAlphabets() {
    let charCode3 = 97; 
    while (charCode3 <= 122) { 
        console.log(String.fromCharCode(charCode3));
        charCode3++;
    }
}

// 4. Print all even numbers between 1 to 100 
function printEvenNumbers() {
    let i4 = 2;
    while (i4 <= 100) {
        console.log(i4);
        i4 += 2;
    }
}

// 5. Print all odd numbers between 1 to 100 
function printOddNumbers() {
    let i5 = 1;
    while (i5 < 100) {
        console.log(i5);
        i5 += 2;
    }
}

// 6. Find sum of all natural numbers between 1 to n
function sumNaturalNumbers(n6) {
    let sum6 = 0;
    let i6 = 1;
    while (i6 <= n6) {
        sum6 += i6;
        i6++;
    }
    return sum6;
}

// 7. Find sum of all even numbers between 1 to n
function sumEvenNumbers(n7) {
    let sum7 = 0;
    let i7 = 2;
    while (i7 <= n7) {
        sum7 += i7;
        i7 += 2;
    }
    return sum7;
}

// 8. Find sum of all odd numbers between 1 to n
function sumOddNumbers(n8) {
    let sum8 = 0;
    let i8 = 1;
    while (i8 <= n8) {
        sum8 += i8;
        i8 += 2;
    }
    return sum8;
}

// 1. Find maximum between two numbers
function findMaxBetweenTwoNumbers(a1, b1) {
    if (a1 > b1) {
        return a1;
    } else {
        return b1;
    }
}

// 2. Find maximum between three numbers
function findMaxBetweenThreeNumbers(a2, b2, c2) {
    if (a2 > b2 && a2 > c2) {
        return a2;
    } else if (b2 > a2 && b2 > c2) {
        return b2;
    } else {
        return c2;
    }
}

// 3. Check whether a number is negative, positive or zero
function checkNumberSign(num3) {
    if (num3 > 0) {
        return "Positive";
    } else if (num3 < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}

// 4. Check whether a number is divisible by 5 and 11 or not
function isDivisibleBy5And11(num4) {
    if (num4 % 5 === 0 && num4 % 11 === 0) {
        return true;
    } else {
        return false;
    }
}

// 5. Check whether a number is even or odd
function isEvenOrOdd(num5) {
    if (num5 % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

// 6. Check whether a year is a leap year or not
function isLeapYear(year6) {
    if ((year6 % 4 === 0 && year6 % 100 !== 0) || (year6 % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

// 7. Check whether a character is an alphabet or not
function isAlphabet(char7) {
    const charCode7 = char7.charCodeAt(0);
    if ((charCode7 >= 65 && charCode7 <= 90) || (charCode7 >= 97 && charCode7 <= 122)) {
        return true;
    } else {
        return false;
    }
}

// 8. Check whether an input alphabet is a vowel or consonant
function isVowelOrConsonant(char8) {
    const vowels8 = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    if (vowels8.includes(char8)) {
        return "Vowel";
    } else {
        return "Consonant";
    }
}

// 9. Check whether a character is an alphabet, digit, or special character
function checkCharacterType(char9) {
    const charCode9 = char9.charCodeAt(0);
    if ((charCode9 >= 65 && charCode9 <= 90) || (charCode9 >= 97 && charCode9 <= 122)) {
        return "Alphabet";
    } else if (charCode9 >= 48 && charCode9 <= 57) {
        return "Digit";
    } else {
        return "Special Character";
    }
}

// 10. Check whether a character is an uppercase or lowercase alphabet
function isUpperCaseOrLowerCase(char10) {
    const charCode10 = char10.charCodeAt(0);
    if (charCode10 >= 65 && charCode10 <= 90) {
        return "Uppercase";
    } else if (charCode10 >= 97 && charCode10 <= 122) {
        return "Lowercase";
    } else {
        return "Not an Alphabet";
    }
}

// 11. Input week number and print week day
function printWeekDay(weekNumber11) {
    const weekDays11 = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    if (weekNumber11 >= 1 && weekNumber11 <= 7) {
        return weekDays11[weekNumber11 - 1];
    } else {
        return "Invalid week number";
    }
}

// 12. Input month number and print number of days in that month
function getDaysInMonth(monthNumber12) {
    if (monthNumber12 < 1 || monthNumber12 > 12) {
        return "Invalid month number";
    }
    const daysInMonth12 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return daysInMonth12[monthNumber12 - 1];
}

// 13. Count total number of notes in a given amount
function countNotes(amount13) {
    const notes13 = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
    let noteCounter13 = Array(10).fill(0);

    for (let i13 = 0; i13 < notes13.length; i13++) {
        if (amount13 >= notes13[i13]) {
            noteCounter13[i13] = Math.floor(amount13 / notes13[i13]);
            amount13 -= noteCounter13[i13] * notes13[i13];
        }
    }
    return noteCounter13;
}

// 14. Input angles of a triangle and check whether triangle is valid or not
function isTriangleValid(angleA14, angleB14, angleC14) {
    if (angleA14 + angleB14 + angleC14 === 180) {
        return true;
    } else {
        return false;
    }
}

// 15. Input all sides of a triangle and check whether triangle is valid or not
function isTriangleSidesValid(sideA15, sideB15, sideC15) {
    if (sideA15 + sideB15 > sideC15 && sideA15 + sideC15 > sideB15 && sideB15 + sideC15 > sideA15) {
        return true;
    } else {
        return false;
    }
}

// 16. Check whether the triangle is equilateral, isosceles or scalene triangle
function triangleType(sideA16, sideB16, sideC16) {
    if (sideA16 === sideB16 && sideB16 === sideC16) {
        return "Equilateral";
    } else if (sideA16 === sideB16 || sideB16 === sideC16 || sideA16 === sideC16) {
        return "Isosceles";
    } else {
        return "Scalene";
    }
}

// 17. Find all roots of a quadratic equation
function findQuadraticRoots(a17, b17, c17) {
    let discriminant17 = b17 * b17 - 4 * a17 * c17;
    if (discriminant17 > 0) {
        let root1_17 = (-b17 + Math.sqrt(discriminant17)) / (2 * a17);
        let root2_17 = (-b17 - Math.sqrt(discriminant17)) / (2 * a17);
        return { root1_17, root2_17 };
    } else if (discriminant17 === 0) {
        let root_17 = -b17 / (2 * a17);
        return { root_17 };
    } else {
        return "No real roots";
    }
}

// 18. Calculate profit or loss
function calculateProfitOrLoss(costPrice18, sellingPrice18) {
    if (sellingPrice18 > costPrice18) {
        return `Profit: ${sellingPrice18 - costPrice18}`;
    } else if (sellingPrice18 < costPrice18) {
        return `Loss: ${costPrice18 - sellingPrice18}`;
    } else {
        return "No profit, no loss";
    }
}

// 19. Calculate percentage and grade
function calculatePercentageAndGrade(physics19, chemistry19, biology19, mathematics19, computer19) {
    let total19 = physics19 + chemistry19 + biology19 + mathematics19 + computer19;
    let percentage19 = (total19 / 500) * 100;
    let grade19;

    if (percentage19 >= 90) {
        grade19 = 'A';
    } else if (percentage19 >= 80) {
        grade19 = 'B';
    } else if (percentage19 >= 70) {
        grade19 = 'C';
    } else if (percentage19 >= 60) {
        grade19 = 'D';
    } else if (percentage19 >= 40) {
        grade19 = 'E';
    } else {
        grade19 = 'F';
    }

    return { percentage19, grade19 };
}

// 20. Calculate gross salary
function calculateGrossSalary(basicSalary20) {
    let hra20, da20;

    if (basicSalary20 <= 10000) {
        hra20 = basicSalary20 * 0.2;
        da20 = basicSalary20 * 0.8;
    } else if (basicSalary20 <= 20000) {
        hra20 = basicSalary20 * 0.25;
        da20 = basicSalary20 * 0.9;
    } else {
        hra20 = basicSalary20 * 0.3;
        da20 = basicSalary20 * 0.95;
    }

    let grossSalary20 = basicSalary20 + hra20 + da20;
    return grossSalary20;
}

// 21. Calculate electricity bill
function calculateElectricityBill(units21) {
    let bill21 = 0;

    if (units21 <= 50) {
        bill21 = units21 * 0.5;
    } else if (units21 <= 150) {
        bill21 = (50 * 0.5) + ((units21 - 50) * 0.75);
    } else if (units21 <= 250) {
        bill21 = (50 * 0.5) + (100 * 0.75) + ((units21 - 150) * 1.2);
    } else {
        bill21 = (50 * 0.5) + (100 * 0.75) + (100 * 1.2) + ((units21 - 250) * 1.5);
    }

    return bill21;
}
