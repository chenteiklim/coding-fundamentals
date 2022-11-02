function sum(arrayNumber){
    let total=0
    for (let i=0; i<arrayNumber.length; i++){
    total =total + arrayNumber[i];
    }
    return total;
}

console.log(sum([1,2,3,4]))
console.log(sum([-3, 5, 19, -6]))