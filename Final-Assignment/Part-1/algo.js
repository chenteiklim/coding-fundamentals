//1

function reverse(string){

    let splitString= string.split('')
    let reverseArray=splitString.reverse()
    let joinArray=reverseArray.join('')
    return joinArray
    }

console.log('\n\n')
console.log('Question1\n')
console.log(reverse('abcde'))
console.log(reverse('hello'))
console.log(reverse('Greetings from The Hacker Collective'))





//2 

function sameBackAndForth(string){

    let leftString= string.slice(0,string.length/2)
    let splitArray =string.split("")
    let reverseArray = splitArray.reverse()
    let rightArray=reverseArray.slice(0,reverseArray.length/2)
    rightString= rightArray.join('')
    
    if (rightString === leftString){
        return true
    }
    else{
        return false
    }

}
console.log('\n\n')
console.log('Question 2\n')
console.log(sameBackAndForth('abddba'))
console.log(sameBackAndForth("abcdefg"))





//3.

function reverseInt(num){
    
    let string= String(num)
    let stringArray= string.split('')
    let reverseArray= stringArray.reverse()
    let reverseString=reverseArray.join('')
    let reverseNum=parseInt(reverseString)
    
    if (num<=0){
        return -(reverseNum)
    }
    else{
        return reverseNum
    }
}
console.log('\n\n')
console.log('Question 3\n')
console.log(reverseInt(15) === 51)
console.log(reverseInt(981) === 189)
console.log(reverseInt(500) === 5)
console.log(reverseInt(-15) ===-51)
console.log(reverseInt(-90) === -9)




//4.

function sumArr(array){
    const sumArray = array
    var sum=0;
    for (let i=0 ; i<sumArray.length ; i++ )
        sum = sum + sumArray[i]       
    return sum
}

console.log('\n\n')
console.log('Question 4\n')
console.log(sumArr([1,2,3,4,5]) == 15 )
console.log(sumArr([1000,2000,44,55,22]) == 3121 )
console.log(sumArr([123,456,789]) == 1368 )




//5. 

function deafGrandma(str){

    text= str.replace('')

    upper=str.toUpperCase()

    upperArray= upper.split('')

    for (i=0; i<upperArray.length; i++){
        if(upperArray[i]===' '){
            upperArray[i]='!!'    
        }      
    }  

   upperArray.push('!!')

    upperString=upperArray.join()

    return upperString
}

console.log('\n\n')
console.log('Question 5\n')
console.log(deafGrandma("I have a bad feeling about this"))




//6.

function whatIsMissing(str){
    let letterNext= str.charCodeAt(0)+1;
    //let missing be empty first;
    var missing= '';
    for(var i=1; i<str.length; i++){
        if ((str.charCodeAt(i)===''|| str.charCodeAt(i))!== letterNext){
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

console.log('\n\n')
console.log('Question 6\n')
console.log( whatIsMissing("abcdefghijklmnopqrstuvwxyz"))
console.log( whatIsMissing("bcdf"))
console.log( whatIsMissing("abcdefghjklmno"))




//7. 

function swap(str,textOri,textReplace){
    let textArrOri=textOri.split('')
    textArr=textReplace.split('')
    if (textArrOri[0]===textArrOri[0].toUpperCase()){
        firstLetter=textArr[0].toUpperCase()
        textArr.splice(0, 1);
        otherLetter=textArr.join('')
        textReplace= firstLetter+otherLetter
    }
    let replaceText = str.replace(textOri,textReplace)
    return replaceText
}

console.log('\n\n')
console.log('Question 7\n')
console.log(swap("His name is Tom", "Tom", "john"))
console.log(swap("Let us get back to more Coding", "Coding", "algorithms"))
console.log(swap("This has a spellngi error", "spellngi", "spelling") )














