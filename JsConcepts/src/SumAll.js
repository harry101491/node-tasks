/**
 * sumAll(1, 4) // returns the sum of 1 + 2 + 3 + 4 which is 10
 */

function sumAll(start, end) {
    if (start > end) {
        return -1;
    }

    let result = start;
    for (let i = start+1; i <= end; i++) {
        result += i;
    }

    return result;
}

console.log(sumAll(1, 4));
