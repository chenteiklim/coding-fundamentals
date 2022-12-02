const addButton=document.querySelector('.add__button')
const notification=document.querySelector('.notification')
const iconclose=document.querySelector('.icon__close')
addButton.addEventListener('click', showNotification)
function showNotification(){
    
    notification.setAttribute('class','show')
    document.body.appendChild(notification)
}
iconclose.addEventListener('click', closeNotification)
function closeNotification(){
    
    notification.setAttribute('class','hidden')
    document.body.appendChild(notification)
}
