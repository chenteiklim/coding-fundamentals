//Create a function
function missingLetter(str){
    let letterNext= str.charCodeAt(0)+1;
    //let missing be empty first;
    var missing= '';
    for(var i=1; i<str.length; i++){
        if ((str.charCodeAt(i)==''|| str.charCodeAt(i))!== letterNext){
            missing= missing+ String.fromCharCode(letterNext)
            letterNext++
            }
            letterNext++
    }  

    if (missing==''){
        missing= undefined;
    }
return missing;
}

console.log(missingLetter("abce"))
console.log(missingLetter("abcdefghjklmno"))
console.log(missingLetter("stvwx"))
console.log(missingLetter("bcdf"))
console.log(missingLetter("abcdefghijklmnopqrstuvwxyz"))