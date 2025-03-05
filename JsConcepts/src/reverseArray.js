
/**
 * function to reverse the array in place
 * @param {*} arr 
 * @returns 
 */
function reverseArray(arr) {
    const mid = arr.length / 2;

    for (let i = 0; i < mid; i ++) {
        const temp = arr[i];
        arr[i] = arr[arr.length - (i + 1)];
        arr[arr.length - (i + 1)] = temp;
    }

    return arr;
}
