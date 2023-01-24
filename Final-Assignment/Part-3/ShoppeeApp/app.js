
const BASE_URL= 'https://fakestoreapi.com/products'
    window.onload=()=>{
    displayProductData();
}

async function getProductData(){
    const response=await fetch(BASE_URL)
    const productData= await response.json()
    return productData
}

async function displayProductData(){
    let productData = await getProductData()
    for(let ID =0; ID<productData.length;ID++){
        let image = productData[ID].image;
        const name=productData[ID].title
        const price=productData[ID].price
        let ratings = parseInt(productData[ID].rating.rate)
    
    const container=document.querySelector('#container')
    console.log(productData)
        let newProduct = `
            <div id="product-${ID}" class="product">
            <div class="imageContainer">
                <img id="image-${ID}" class="image" src="${image}" alt="" >
            </div>
            <div id="productName-${ID}" class="name">${name}</div>
            <div id="productPrice-${ID}" class="price">
                <div id=unit-${ID} class="unit">RM</div>
                <div id="price-${ID}">${price}</div>
            </div>
            <div id='rating'>
            `

            for (let i = 1; i <= ratings; i++) {
                
                newProduct += `
                <span class="fa fa-star checked"></span>
                `;
            }
            for (let i = ratings+1; i <=5 ; i++) {
                
                newProduct += `
                <span class="fa fa-star"></span>
                `;
            }
            newProduct +=`</div>`

            
            newProduct+= `<button id="btn-${ID}" onclick="save(${ID})"  class ="btn" type="button">Purchase</button>`
            container.innerHTML+=newProduct
        }
}

