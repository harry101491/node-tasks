/**
 * 1. reverse array
 */

let arr = [1, 2, 3, 4, 5];
function reverseArray(arr) {
    return arr.reverse();
}

console.log('Reverse Array', reverseArray(arr));

/**
 * Sum of Elements
 */

function sumElements(arr) {
    return arr.reduce((acc, val) => acc + val, 0);
}

console.log('Sum Elements', sumElements(arr));

/**
 * Finding the maximum
 */

function findingMaximum(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}

console.log('Finding maximum', findingMaximum(arr));

/**
 * Filtering Even numbers
 */

function findingEvenNumber(arr) {
    return arr.filter((item) => item % 2 === 0);
}

console.log('Finding even numbers', findingEvenNumber(arr));

/**
 * Merge Arrays
 */

function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}

console.log('Merge Arrays', mergeArrays(arr, [6, 7, 8]));

/**
 * Count Occurences
 */

function countOccurence(arr, val) {
    return arr.filter((item) => item === val).length;
}

console.log(countOccurence([1, 2, 2, 3, 3, 3, 4], 3));

/**
 * Remove duplicates
 */

function removeDuplicates(arr) {
    return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

/**
 * Multiply each element
 */

function multiplyEach(arr, element) {
    return arr.map((item) => item * element);
}