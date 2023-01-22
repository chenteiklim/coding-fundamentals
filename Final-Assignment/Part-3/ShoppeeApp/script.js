const viewImages = document.querySelector('#viewImages')
const viewNames = document.querySelector('#viewNames')
const viewPrice = document.querySelector('#viewPrice')

let selectedImages = localStorage.getItem("selectedImages");
let selectedName = localStorage.getItem("selectedName");
let selectedPrice = localStorage.getItem("selectedPrice");

window.addEventListener("load", () =>{
    console.log('page is finish loaded')
    getImage()
    getName()
    getPrice()
  });
function getImage(){  
    if (selectedImages === "images1") {
        viewImages.src=localStorage.getItem('imagesData1')
    } 
    
    else if (selectedImages === "images2") {
        viewImages.src=localStorage.getItem('imagesData2')
    }

    else if (selectedImages === "images3") {
        viewImages.src=localStorage.getItem('imagesData3')
    }

    else if (selectedImages === "images4") {
        viewImages.src=localStorage.getItem('imagesData4')
    }
    
    else if (selectedImages === "images5") {
        viewImages.src=localStorage.getItem('imagesData5')
    }

    else if (selectedImages === "images6") {
        viewImages.src=localStorage.getItem('imagesData6')
    }
    
}

function getName(){
    
    if (selectedName === "names1") {
        viewNames.textContent=localStorage.getItem('nameData1')  
        
    } else if (selectedName=== "names2") {
        viewNames.textContent=localStorage.getItem('nameData2')  
    }

    else if (selectedName=== "names3") {
        viewNames.textContent=localStorage.getItem('nameData3')  
    }

    else if (selectedName=== "names4") {
        viewNames.textContent=localStorage.getItem('nameData4')  
    }

    else if (selectedName=== "names5") {
        viewNames.textContent=localStorage.getItem('nameData5')  
    }

    else if (selectedName=== "names6") {
        viewNames.textContent=localStorage.getItem('nameData6')  
    }
}

function getPrice(){
    
    if (selectedPrice === "price1") {
        viewPrice.textContent='RM'+localStorage.getItem('priceData1')  
        
    } else if (selectedPrice === "price2") {
        viewPrice.textContent='RM'+localStorage.getItem('priceData2')  
    }    

    else if (selectedPrice === "price3") {
        viewPrice.textContent='RM'+localStorage.getItem('priceData3')  
    }    

    else if (selectedPrice === "price4") {
        viewPrice.textContent='RM'+localStorage.getItem('priceData4')  
    }    

    else if (selectedPrice === "price5") {
        viewPrice.textContent='RM'+localStorage.getItem('priceData5')  
    }    

    else if (selectedPrice === "price6") {
        viewPrice.textContent='RM'+localStorage.getItem('priceData6')  
    }    
}