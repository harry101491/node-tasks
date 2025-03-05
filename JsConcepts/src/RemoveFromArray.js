/**
 * removeFromArray([1, 2, 3, 4], 3); // should remove 3 and return [1,2,4]
 * 
 */

function removeFromArray(arr, val) {
    if (arr.length < 1) {
        return [];
    }

    let index = -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            index = i;
        }
    }

    if (index === -1) {
        return arr;
    } else {
        arr.splice(index, 1);
        return arr;
    }
}

console.log(removeFromArray([], 5));