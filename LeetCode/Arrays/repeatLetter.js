// Frequency counter

const repeatLetter = (str) => {
    let counter = {};

    [...str].forEach((str) => {
        counter[str] ? counter[str]++ : counter[str] = 1;
    });

    for (let key in counter) {
        if (counter[key] === 1) {
            return key;
        }
    }
    return 'Not found';
}

console.log(repeatLetter('ddillipp'));