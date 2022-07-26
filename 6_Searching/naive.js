// Navie base search
// eg function name("lordin lol", lol) -> O/P count = 1;

function naiveStringSearch(longStr, shortStr) {
    let count = 0;
    for (let i = 0; i < longStr.length; i++) {
        for (let j = 0; j < shortStr.length; j++) {
            if (shortStr[j] !== longStr[i + j]) break;
            if (j === shortStr.length - 1) count++;
        }
    }
    return count;
}

console.log(naiveStringSearch("lorie lolololed", "lo"));

// l l
// l o
// l l