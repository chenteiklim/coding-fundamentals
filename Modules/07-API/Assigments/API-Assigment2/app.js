const avatar=document.querySelector('#avatar')
const names=document.querySelector('#names')
const biography=document.querySelector('#bio')
const dates=document.querySelector('#date')
const message=document.querySelector('#message')
const BASE_URL='https://api.github.com/users'

async function EmptyInput(){
    const nameInput=document.getElementById("nameInput").value
    try{
        if (nameInput===""){
            message.textContent="User does not exist"
        }
        }
     catch(err){
            message.textContent=err.message
        }

    
}

async function getName(){
    const nameInput=document.getElementById("nameInput").value
    const ENDPOINT=`${BASE_URL}/${nameInput}`
    return ENDPOINT
}


async function getUser(){
    ENDPOINT=await getName()
    const response=await fetch(ENDPOINT)
    const userData=await response.json()
    return userData

}

async function displayName(){
    userData=await getUser()
    const username=userData.login
    names.textContent=username
}



async function displayBio(){
    userData=await getUser()
    const bio=userData.bio
    if (bio){
        bioDisplay=bio
        biography.textContent=bioDisplay
    }

    else{
        biography.textContent="null"
    }
    
}


async function displayDate(){
    userData=await getUser()
    const date=userData.created_at
    const array=date.split("T")
    dates.textContent=array[0]

    
   
}


async function displayAvatar(){
    userData=await getUser()
    const avatarurl=userData.avatar_url
    if(avatarurl){
        avatar.src=avatarurl
    }
   
    
}





