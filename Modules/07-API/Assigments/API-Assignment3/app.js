const names=document.querySelector("#names")
const nameLabel=document.querySelector('#nameLabel')
const age=document.querySelector('#age')
const ageLabel=document.querySelector('#ageLabel')
const hobbies=document.querySelector('#hobbies')
const ENDPOINT="https://api.github.com/gists/d338bd52795ec9c4c9774cdd0e80397e"



async function getData(){
    const response=await fetch(ENDPOINT)
    const data=await response.json()
    const myData=data.files['me.json'].content
    const obj=JSON.parse(myData)
    console.log(obj)
    return obj
}

async function displayNameLabel(){
    nameText="Name:"
    nameLabel.textContent=nameText
}


async function displayName(){
    const obj= await getData()
    const myName= obj.name 
    names.textContent=myName 
}

async function displayAgeLabel(){
    ageText="Age:"
    ageLabel.textContent=ageText
}

async function displayAge(){
    const obj=await getData()
    const myAge=obj.age
    age.textContent=myAge
}

async function displayHobbies(){
    const obj=await getData()
    const myHobbies=obj.hobbies

    myHobbies.forEach((item) => {
        let li = document.createElement("li");
        li.textContent = item;
        hobbies.appendChild(li);
    })
    
  
}