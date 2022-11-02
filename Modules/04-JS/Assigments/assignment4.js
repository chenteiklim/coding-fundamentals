function pattern(n){
    let total=0;
    for (let i=n; i>0; i--)
    {
        total=total+(i*(i+1))/2;
    }
    return total
}
console.log(pattern(1))
console.log(pattern(2))
console.log(pattern(3))
console.log(pattern(4))
console.log(pattern(5))
console.log(pattern(6))