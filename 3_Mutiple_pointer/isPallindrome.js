function isPalindrome(str) {
    let i = 0;
    let j = str.length - 1;

    while (i < j) {
        if (str.length === 1) return true;
        // if (str.length === 2 && str[i] === str[j]) return true;
        if (str[i] !== str[j]) {
            return false;
        } else {
            i++;
            j--;
        }
    }

    return true;
}

console.log(isPalindrome('poeoooop'));