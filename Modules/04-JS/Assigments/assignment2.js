function calculateAge(date) {
    let formattedDate = date.split("/")
    let birthYear = (formattedDate[2])
    let birthMonth= (formattedDate[1])
    let birthDate= (formattedDate[1])
    let birthdateMS =birthYear*365*24*60*60*1000+birthMonth*30*24*60*60*1000+birthDate*24*60*60*1000
    let currentDate = 2022*365*24*60*60*1000+11*30*24*60*60*1000+1*24*60*60*1000
    let difference = currentDate - birthdateMS

    console.log("birthdateMs:" ,birthdateMS, "milliseconds" )
    console.log("currentdate:", currentDate,"milliseconds") 
    console.log("difference:",difference, "milliseconds")
    let currentAge = Math.floor(difference / 1000 / 60 / 60 / 24 /365)
    return currentAge
}

console.log(calculateAge("20/7/2002"))  
console.log(calculateAge("10/1/1979")) 

