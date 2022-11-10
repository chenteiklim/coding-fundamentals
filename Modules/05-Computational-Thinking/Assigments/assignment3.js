function generation(number,gender){
    if (number===0 && gender==="m" || number==0 &&gender==="f" ){
        return "me"
    }
    else if(number===-3 && gender==="m"){
        return "great grandfather"
    }
    else if(number===-3 && gender=== "f"){
        return "great grandmother"
    }
    else if(number===-2 && gender=== "m"){
        return "grandfather"
    }
    else if(number===-2 && gender=== "f"){
        return "grandmother"
    }
    else if(number===-1 && gender=== "m"){
        return "father"
    }

    else if(number===-1 && gender=== "f"){
        return "mother"
    }

    else if(number===1 && gender=== "m"){
        return "son"
    }

    else if(number===1 && gender=== "f"){
        return "daughter"
    }
    else if(number===2 && gender=== "m"){
        return "grandson"
    }

    else if(number===2 && gender=== "f"){
        return "granddaughter"
    }

    else if(number===3 && gender=== "m"){
        return "great grandson"
    }
    else if(number===3 && gender=== "f"){
        return "great granddaughter"
    } 
    else{
        return "enter wrongly, please enter again"
    }

}
console.log(generation(2, "f")) 
console.log(generation(-3, "m")) 
console.log(generation(1, "f")) 