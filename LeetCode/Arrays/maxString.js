// my_str = 'abcdefgfaabbbffbbbbbbfgbb'
// Two/Multi Pointer

function strCount(str) {

    let max = 0;
    let i = 0;
    let count = 0;

    for (j = 1; j < str.length; j++) {
        str[i] !== str[j] ? count = 0 : count++;
        max = Math.max(count, max)
        i++;
    }

    return max + 1;
}

console.log(strCount('abcdefgfaabbbffbbbbbbfgbb'));

/**
 



 */