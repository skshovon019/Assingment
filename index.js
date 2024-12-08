
// 1 start 
function calculateDifference(first, second) {
    return first - second;
}


console.log(calculateDifference(341, 175)); 




// 2 Is Odd or not
function isOdd(number) {
    return number % 2 !== 0;
}


console.log(isOdd(26)); 
console.log(isOdd(47));




// 3 Find Min number in array 
function findMin(numbers) {
    
    return Math.min(...numbers);
}



console.log(findMin([-3, 10, 52, -23, 3, 0, 57, -70, 30]));





// 4 Find even numbers in array
function filterEvenNumbers(numbers) {
    return numbers.filter(number => number % 2 === 0);
}


console.log(filterEvenNumbers([10, 52, -23, 3, 0, 14, 76, 12, 32, 13, 41, 57, 62]));





// 5 Sort array descending order
function sortArrayDescending(numbers) {
    return [...numbers].sort((a, b) => b - a);
}


console.log(sortArrayDescending([10, 52, -23, 3, 0, 14, 76, 12, 32, 13, 41, 57, 62]));





// 6 Retuen frist letter as lowercase
function lowercaseFirstLetter(str) {
    if (!str) return ""; 
    return str.charAt(0).toLowerCase() + str.slice(1);
}


console.log(lowercaseFirstLetter("Cristiano"));  
console.log(lowercaseFirstLetter("Ronaldo"));






// 7 find average of all elements
function findAverage(numbers) {
    const sum = numbers.reduce((total, num) => total + num, 0);
    return sum / numbers.length;
}

console.log(findAverage([10, 52, -23, 3, 0, 14, 76, 12, 32, 13, 41, 57, 62]));





// 8 Is leap year or not 
function isLeapYear(year) {
    if (year % 4 !== 0) {
        return false; 
    } else if (year % 100 !== 0) {
        return true; 
    } else if (year % 400 === 0) {
        return true; 
    } else {
        return false; 
    }
}


console.log(isLeapYear(2012));
console.log(isLeapYear(2029));