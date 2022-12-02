navBar=document.querySelector('.header')
topWrapper=document.querySelector('.top-wrapper')
window.addEventListener('scroll',hideNavbar)
topWrapper.addEventListener('mouseover',showHeader)
topWrapper.addEventListener('mouseout',hideHeader)
function hideNavbar(){
    var y = window.scrollY;
    if (y>=400){
        navBar.classList.replace('header','hideheader')
    }
    else {
        navBar.classList.replace('hideheader','header')
    }
}

function showHeader(e){
    e.preventDefault();
    var y = window.scrollY;
    if (y>=400){
        navBar.classList.replace('hideheader','header')
        console.log("Mouse in");
    }
}


function hideHeader(e){
    e.preventDefault();
    var y = window.scrollY;
    if (y>=400){
        navBar.classList.replace('header','hideheader')
        console.log("Mouse out");
    }
}