//When clicking on CTRL+K,command pallete will open/close
const wrapper=document.querySelector(".wrapper")
const palette=document.querySelector(".palette")

document.addEventListener("keydown",(event)=>{
    console.log("keydown",event)
    if(event.ctrlKey&& event.key==="k"){
        event.preventDefault();
        palette.classList.replace('hidden',"show")   
    }
}

)
