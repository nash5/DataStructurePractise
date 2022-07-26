function capitalizeWords(array) {
    if (array.length === 1) {
        return [array[0][0].toUpperCase() + array[0].substr(1)];
    }
    let res = capitalizeWords(array.slice(0, -1));
    res.push(array.slice(array.length - 1)[0][0].toUpperCase() + array[array.length - 1].substr(1));
    return res;

}

console.log(capitalizeWords(['naresh', 'taj mahal', 'happy']));