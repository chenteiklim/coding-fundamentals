const image1=document.querySelector('#image1')
const productName1=document.querySelector('#productName1')
const unit1=document.querySelector('#unit1')
const price1=document.querySelector('#price1')
const rating1=document.querySelector('#rating1')
const star1A=document.querySelector('.star1A')
const star2A=document.querySelector('.star2A')
const star3A=document.querySelector('.star3A')
const star4A=document.querySelector('.star4A')
const star5A=document.querySelector('.star5A')

const image2=document.querySelector('#image2')
const productName2=document.querySelector('#productName2')
const unit2=document.querySelector('#unit2')
const price2=document.querySelector('#price2')
const rating2=document.querySelector('#rating2')
const star1B=document.querySelector('.star1B')
const star2B=document.querySelector('.star2B')
const star3B=document.querySelector('.star3B')
const star4B=document.querySelector('.star4B')
const star5B=document.querySelector('.star5B')


const image3=document.querySelector('#image3')
const productName3=document.querySelector('#productName3')
const unit3=document.querySelector('#unit3')
const price3=document.querySelector('#price3')
const rating3=document.querySelector('#rating3')
const star1C=document.querySelector('.star1C')
const star2C=document.querySelector('.star2C')
const star3C=document.querySelector('.star3C')
const star4C=document.querySelector('.star4C')
const star5C=document.querySelector('.star5C')


const image4=document.querySelector('#image4')
const productName4=document.querySelector('#productName4')
const unit4=document.querySelector('#unit4')
const price4=document.querySelector('#price4')
const rating4=document.querySelector('#rating4')
const star1D=document.querySelector('.star1D')
const star2D=document.querySelector('.star2D')
const star3D=document.querySelector('.star3D')
const star4D=document.querySelector('.star4D')
const star5D=document.querySelector('.star5D')


const image5=document.querySelector('#image5')
const productName5=document.querySelector('#productName5')
const unit5=document.querySelector('#unit5')
const price5=document.querySelector('#price5')
const rating5=document.querySelector('#rating5')
const star1E=document.querySelector('.star1E')
const star2E=document.querySelector('.star2E')
const star3E=document.querySelector('.star3E')
const star4E=document.querySelector('.star4E')
const star5E=document.querySelector('.star5E')


const image6=document.querySelector('#image6')
const productName6=document.querySelector('#productName6')
const unit6=document.querySelector('#unit6')
const price6=document.querySelector('#price6')
const rating6=document.querySelector('#rating6')
const star1F=document.querySelector('.star1F')
const star2F=document.querySelector('.star2F')
const star3F=document.querySelector('.star3F')
const star4F=document.querySelector('.star4F')
const star5F=document.querySelector('.star5F')

const BASE_URL= 'https://fakestoreapi.com/products'




async function getProductData(){
    const response=await fetch(BASE_URL)
    const productData= await response.json()
    return productData
}

async function displayImage1(){
    productData = await getProductData()
    const image=productData[0].image
    console.log(image)
    image1.src=image
    localStorage.setItem('imagesData1',image)
}

async function displayPoductName1(){
    productData = await getProductData()
    const productName=productData[0].title
    productName1.textContent=productName
    localStorage.setItem('nameData1',productName)
}


async function displayPrice1(){
    productPrice = await getProductData()
    const price=productPrice[0].price
    unit1.textContent='RM'
    price1.textContent= price
    localStorage.setItem('priceData1',price)
}

async function getProductRating1(){
    productRating= await getProductData()
    const rating= Math.floor(parseInt(productRating[0].rating.rate))
    return rating
}

async function displayProductRating1(){
    rating=await getProductRating1()
    console.log(rating)
    if(rating===1){
        star1A.style.fill='yellow'
    }
    if(rating===2){
        star1A.style.fill='yellow'
        star2A.style.fill='yellow'
    }
    if(rating===3){
        star1A.style.fill='yellow'
        star2A.style.fill='yellow'
        star3A.style.fill='yellow'
    }
    if(rating===4){
        star1A.style.fill='yellow'
        star2A.style.fill='yellow'
        star3A.style.fill='yellow'
        star4A.style.fill='yellow'
    }
    if(rating===5){
        star1A.style.fill='yellow'
        star2A.style.fill='yellow'
        star3A.style.fill='yellow'
        star4A.style.fill='yellow'
        star5A.style.fill='yellow'
    }
}



async function displayImage2(){
    productData = await getProductData()
    const image=productData[1].image
    image2.src=image
    localStorage.setItem('imagesData2',image)
}

async function displayPoductName2(){
    productData = await getProductData()
    const productName=productData[1].title
    productName2.textContent=productName
    localStorage.setItem('nameData2',productName)
}

async function displayPrice2(){
    productPrice = await getProductData()
    const price=productPrice[1].price
    unit2.textContent='RM'
    price2.textContent= price
    localStorage.setItem('priceData2',price)
}

async function getProductRating2(){
    productRating= await getProductData()
    const rating= Math.floor(parseInt(productRating[1].rating.rate))
    return rating
}

async function displayProductRating2(){
    rating=await getProductRating2()
    console.log(rating)
    if(rating===1){
        star1B.style.fill='yellow'
    }
    if(rating===2){
        star1B.style.fill='yellow'
        star2B.style.fill='yellow'
    }
    if(rating===3){
        star1B.style.fill='yellow'
        star2B.style.fill='yellow'
        star3B.style.fill='yellow'
    }
    if(rating===4){
        star1B.style.fill='yellow'
        star2B.style.fill='yellow'
        star3B.style.fill='yellow'
        star4B.style.fill='yellow'
    }
    if(rating===5){
        star1B.style.fill='yellow'
        star2B.style.fill='yellow'
        star3B.style.fill='yellow'
        star4B.style.fill='yellow'
        star5B.style.fill='yellow'
    }
}


async function displayImage3(){
    productData = await getProductData()
    const image=productData[2].image
    image3.src=image
    localStorage.setItem('imagesData3',image)
}

async function displayPoductName3(){
    productData = await getProductData()
    const productName=productData[2].title
    productName3.textContent=productName
    localStorage.setItem('nameData3',productName)
}

async function displayPrice3(){
    productPrice = await getProductData()
    const price=productPrice[2].price
    unit3.textContent='RM'
    price3.textContent= price
    localStorage.setItem('priceData3',price)
}


async function getProductRating3(){
    productRating= await getProductData()
    const rating= Math.floor(parseInt(productRating[2].rating.rate))
    return rating
}

async function displayProductRating3(){
    rating=await getProductRating3()
    console.log(rating)
    if(rating===1){
        star1C.style.fill='yellow'
    }
    if(rating===2){
        star1C.style.fill='yellow'
        star2C.style.fill='yellow'
    }
    if(rating===3){
        star1C.style.fill='yellow'
        star2C.style.fill='yellow'
        star3C.style.fill='yellow'
    }
    if(rating===4){
        star1C.style.fill='yellow'
        star2C.style.fill='yellow'
        star3C.style.fill='yellow'
        star4C.style.fill='yellow'
    }
    if(rating===5){
        star1C.style.fill='yellow'
        star2C.style.fill='yellow'
        star3C.style.fill='yellow'
        star4C.style.fill='yellow'
        star5C.style.fill='yellow'
    }
}


async function displayImage4(){
    productData = await getProductData()
    const image=productData[3].image
    image4.src=image
    localStorage.setItem('imagesData4',image)
}



async function displayPoductName4(){
    productData = await getProductData()
    const productName=productData[3].title
    productName4.textContent=productName
    localStorage.setItem('nameData4',productName)
}

async function displayPrice4(){
    productPrice = await getProductData()
    const price=productPrice[3].price
    unit4.textContent='RM'
    price4.textContent= price
    localStorage.setItem('priceData4',price)
}


async function getProductRating4(){
    productRating= await getProductData()
    const rating= Math.floor(parseInt(productRating[3].rating.rate))
    return rating
}

async function displayProductRating4(){
    rating=await getProductRating4()
    console.log(rating)
    if(rating===1){
        star1D.style.fill='yellow'
    }
    if(rating===2){
        star1D.style.fill='yellow'
        star2D.style.fill='yellow'
    }
    if(rating===3){
        star1D.style.fill='yellow'
        star2D.style.fill='yellow'
        star3D.style.fill='yellow'
    }
    if(rating===4){
        star1D.style.fill='yellow'
        star2D.style.fill='yellow'
        star3D.style.fill='yellow'
        star4D.style.fill='yellow'
    }
    if(rating===5){
        star1D.style.fill='yellow'
        star2D.style.fill='yellow'
        star3D.style.fill='yellow'
        star4D.style.fill='yellow'
        star5D.style.fill='yellow'
    }
}


async function displayImage5(){
    productData = await getProductData()
    const image=productData[4].image
    image5.src=image
    localStorage.setItem('imagesData5',image)
    
}


async function displayPoductName5(){
    productData = await getProductData()
    const productName=productData[4].title
    productName5.textContent=productName
    localStorage.setItem('nameData5',productName)
}

async function displayPrice5(){
    productPrice = await getProductData()
    const price=productPrice[4].price
    unit5.textContent='RM'
    price5.textContent= price
    localStorage.setItem('priceData5',price)
}


async function getProductRating5(){
    productRating= await getProductData()
    const rating= Math.floor(parseInt(productRating[4].rating.rate))
    return rating
}

async function displayProductRating5(){
    rating=await getProductRating5()
    console.log(rating)
    if(rating===1){
        star1E.style.fill='yellow'
    }
    if(rating===2){
        star1E.style.fill='yellow'
        star2E.style.fill='yellow'
    }
    if(rating===3){
        star1E.style.fill='yellow'
        star2E.style.fill='yellow'
        star3E.style.fill='yellow'
    }
    if(rating===4){
        star1E.style.fill='yellow'
        star2E.style.fill='yellow'
        star3E.style.fill='yellow'
        star4E.style.fill='yellow'
    }
    if(rating===5){
        star1E.style.fill='yellow'
        star2E.style.fill='yellow'
        star3E.style.fill='yellow'
        star4E.style.fill='yellow'
        star5E.style.fill='yellow'
    }
}



async function displayImage6(){
    productData = await getProductData()
    const image=productData[5].image
    image6.src=image
    localStorage.setItem('imagesData6',image)
}

async function displayPoductName6(){
    productData = await getProductData()
    const productName=productData[5].title
    productName6.textContent=productName
    localStorage.setItem('nameData6',productName)
}

async function displayPrice6(){
    productPrice = await getProductData()
    const price=productPrice[5].price
    unit6.textContent='RM'
    price6.textContent= price
    localStorage.setItem('priceData6',price)
}


async function getProductRating6(){
    productRating= await getProductData()
    const rating= Math.floor(parseInt(productRating[5].rating.rate))
    return rating
}

async function displayProductRating6(){
    rating=await getProductRating6()
    console.log(rating)
    if(rating===1){
        star1F.style.fill='yellow'
    }
    if(rating===2){
        star1F.style.fill='yellow'
        star2F.style.fill='yellow'
    }
    if(rating===3){
        star1F.style.fill='yellow'
        star2F.style.fill='yellow'
        star3F.style.fill='yellow'
    }
    if(rating===4){
        star1F.style.fill='yellow'
        star2F.style.fill='yellow'
        star3F.style.fill='yellow'
        star4F.style.fill='yellow'
    }
    if(rating===5){
        star1F.style.fill='yellow'
        star2F.style.fill='yellow'
        star3F.style.fill='yellow'
        star4F.style.fill='yellow'
        star5F.style.fill='yellow'
    }
}

const btn1=document.querySelector('#btn1')
const btn2=document.querySelector('#btn2')
const btn3=document.querySelector('#btn3')
const btn4=document.querySelector('#btn4')
const btn5=document.querySelector('#btn5')
const btn6=document.querySelector('#btn6')

btn1.addEventListener("click", function() {
    localStorage.setItem("selectedImages", "images1")
    localStorage.setItem("selectedName", "names1")
    localStorage.setItem("selectedPrice", "price1")
    window.location.href = "http://127.0.0.1:5002/purchase.html"; // redirect to other.html
});

btn2.addEventListener("click", function() {
    localStorage.setItem("selectedImages", "images2")
    localStorage.setItem("selectedName", "names2")
    localStorage.setItem("selectedPrice", "price2")
    window.location.href = "http://127.0.0.1:5002/purchase.html"; // redirect to other.html
});


btn3.addEventListener("click", function() {
    localStorage.setItem("selectedImages", "images3")
    localStorage.setItem("selectedName", "names3")
    localStorage.setItem("selectedPrice", "price3")
    window.location.href = "http://127.0.0.1:5002/purchase.html"; // redirect to other.html
});


btn4.addEventListener("click", function() {
    localStorage.setItem("selectedImages", "images4")
    localStorage.setItem("selectedName", "names4")
    localStorage.setItem("selectedPrice", "price4")
    window.location.href = "http://127.0.0.1:5002/purchase.html"; // redirect to other.html
});


btn5.addEventListener("click", function() {
    localStorage.setItem("selectedImages", "images5")
    localStorage.setItem("selectedName", "names5")
    localStorage.setItem("selectedPrice", "price5")
    window.location.href = "http://127.0.0.1:5002/purchase.html"; // redirect to other.html
});

btn6.addEventListener("click", function() {
    localStorage.setItem("selectedImages", "images6")
    localStorage.setItem("selectedName", "names6")
    localStorage.setItem("selectedPrice", "price6")
    window.location.href = "http://127.0.0.1:5002/purchase.html"; // redirect to other.html
});