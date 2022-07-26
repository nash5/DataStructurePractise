// WAP to validate the anagram -> letter should be same but jumbled.
// cenima -> iceman

function validAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    const lookup = {};
    [...str1].map(v => {
        lookup[v] ? lookup[v] += 1 : lookup[v] = 1;
    })

    // for (i = 0; i < str1.length; i++) {
    //     lookup[str1[i]] ? lookup[str1[i]] += 1 : lookup[str1[i]] = 1;
    // }

    for (i = 0; i < str2.length; i++) {
        if (!lookup[str2[i]]) {
            return false;
        } else {
            lookup[str2[i]] -= 1;
        }
    }

    return true;

}

console.log(validAnagram('qwertys', 'qeywrtd'));