/**
 * This function should repeat the string multiple times
 * Usage :- repeatString('hey', 3)
 */

function repeatString(str, count) {
    if (count === 0 || count === 1) {
        return str;
    }

    let res = '';
    while (count > 0) {
        res = res.concat(str);
        count --;
    }

    return res;
}
