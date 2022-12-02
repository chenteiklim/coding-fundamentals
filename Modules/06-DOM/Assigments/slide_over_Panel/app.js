const sideBar=document.querySelector('.slideOver')
const register=document.querySelector('.register__button')
const close__icon=document.querySelector('.close-icon')
register.addEventListener('click',showSideBar)
close__icon.addEventListener('click',hidesideBar)

function showSideBar(e){
    e.preventDefault();
    sideBar.classList.replace('slide-out','slide-in')   
}
function hidesideBar(){
    sideBar.classList.replace('slide-in','slide-out')
}


