// function oddNum(arr) {
//     return arr.map(a => {
//         if(a % 2 === 0) return a;
//     })
// }

// console.log(oddNum([1,2,3,4]));

// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(arr){
    if(!arr.length) return null;
    if(arr.length === 1) return arr[0];
    
    let total = 0;
    
    for(let i = 0; i < arr.length; arr++){
        total += arr[i] * arr[i+1];
    }
    
    return total;
}

console.log(productOfArray([1,2,3]));