//WAP to sort number and string and thier differences.
// IMP Link - https://www.toptal.com/developers/sorting-algorithms
// https://visualgo.net/en/sorting?slide=1

let a = [2, 3, 11, 9, 5, 31].sort();
console.log("It won't sort proper", a);


let b = ['a', 'b', 'e', 'd', 'h', 'f'].sort()
console.log("Strings will be sorted properly", b);

a = a.sort((a,b) => a-b);
console.log("Number will sort proper", a);
