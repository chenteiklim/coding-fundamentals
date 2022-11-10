function perimeter(letter,num){
    side=num
    radius=num
    let perimeter= letter==="s"?4*side
    :letter=="c"?6.28*radius
    :"undefined"

    return perimeter
    
    
}
console.log(perimeter("s",7))
console.log(perimeter("c",4))
console.log(perimeter("c",9))
console.log(perimeter("a",9))