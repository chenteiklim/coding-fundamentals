const catname=document.querySelector('#catname')
const catImage=document.querySelector('#catImage')
const catDescription=document.querySelector('#catDescription')
const catTemperament=document.querySelector('#catTemperament')
const anchorLink=document.querySelector('#profileLink')
const catname2=document.querySelector('#catname2')
const catImage2=document.querySelector('#catImage2')
const catDescription2=document.querySelector('#catDescription2')
const catTemperament2=document.querySelector('#catTemperament2')
const anchorLink2=document.querySelector('#profileLink2')
const catname3=document.querySelector('#catname3')
const catImage3=document.querySelector('#catImage3')
const catDescription3=document.querySelector('#catDescription3')
const catTemperament3=document.querySelector('#catTemperament3')
const anchorLink3=document.querySelector('#profileLink3')

const BASE_URL='https://api.thecatapi.com/v1/breeds'
const IMG_ENDPOINT='https://cdn2.thecatapi.com/images'

async function getCatData(){
    
    const response=await fetch(BASE_URL)
    const catData=await response.json()
    return catData
}

async function getCatID1(){
    catData=await getCatData()
    const catID1=catData[0].id
    return catID1
}

async function getCatName1(){
    const catID1=await getCatID1()
    const response=await fetch(`${BASE_URL}/${catID1}`)
    const catData=await response.json()
    return catData
}

async function displayCatName1(){
    catData=await getCatName1()
    const catName1=catData.name 
    catname.textContent=catName1
}

async function displayCatImage1(){
    catData=await getCatName1()
    const catImage1id=catData.reference_image_id
    const image1ENDPOINT=`${IMG_ENDPOINT}/${catImage1id}.jpg`
    catImage.src=image1ENDPOINT
} 

async function displayCatDescription1(){
    catData=await getCatName1()
    const description=catData.description
    catDescription.textContent=description
}

async function displayTemparament1(){
    catData=await getCatName1()
    const temperament=catData.temperament
    catTemperament.textContent=temperament
}

async function displayProfile1(){
    catData=await getCatName1()
    const profileLink=catData.wikipedia_url
    anchorLink.href=profileLink
}

async function getCatID2(){
    catData=await getCatData()
    const catID2=catData[1].id
    return catID2
}

async function getCatName2(){
    const catID2=await getCatID2()
    const response=await fetch(`${BASE_URL}/${catID2}`)
    const catData2=await response.json()
    return catData2
}

async function displayCatName2(){
    catData2=await getCatName2()
    const catName2=catData2.name 
    catname2.textContent=catName2
}

async function displayCatImage2(){
    catData2=await getCatName2()
    const catImage1id2=catData2.reference_image_id
    const image2ENDPOINT=`${IMG_ENDPOINT}/${catImage1id2}.jpg`
    catImage2.src=image2ENDPOINT
} 

async function displayCatDescription2(){
    catData2=await getCatName2()
    const description2=catData2.description
    catDescription2.textContent=description2
}

async function displayTemparament2(){
    catData2=await getCatName2()
    const temperament=await catData2.temperament
    catTemperament2.textContent=temperament
}

async function displayProfile2(){
    catData2=await getCatName2()
    const profileLink2=catData2.wikipedia_url
    console.log(profileLink2)
    anchorLink2.href=profileLink2
}


async function getCatID3(){
    catData=await getCatData()
    const catID3=catData[2].id
    return catID3
}

async function getCatName3(){
    const catID3=await getCatID3()
    const response=await fetch(`${BASE_URL}/${catID3}`)
    const catData=await response.json()
    return catData
}

async function displayCatName3(){
    catData=await getCatName3()
    const catName3=catData.name 
    catname3.textContent=catName3
}

async function displayCatImage3(){
    catData=await getCatName3()
    const catImageid=catData.reference_image_id
    const imageENDPOINT3=`${IMG_ENDPOINT}/${catImageid}.jpg`
    catImage3.src=imageENDPOINT3
} 

async function displayCatDescription3(){
    catData=await getCatName3()
    const description3=catData.description3
    catDescription3.textContent=description3
}

async function displayTemparament3(){
    catData=await getCatName3()
    const temperament3=catData.temperament
    console.log(temperament3)
    catTemperament3.textContent=temperament3
}

async function displayProfile3(){
    catData=await getCatName3()
    const profileLink=catData.wikipedia_url
    anchorLink3.href=profileLink
}
displayCatImage1()
displayCatName1()
displayCatDescription1()
displayTemparament1()
displayProfile1()
displayCatImage2()
displayCatName2()
displayCatDescription2()
displayTemparament2()
displayProfile2()
displayCatImage3()
displayCatName3()
displayCatDescription3()
displayTemparament3()
displayProfile3()

