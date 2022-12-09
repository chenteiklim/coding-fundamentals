const quoteText=document.querySelector('#quoteText')
const authorText=document.querySelector('#authorText')
const button=document.querySelector('#myButton')

const ENDPOINT='https://api.quotable.io/random'
async function getQuote(){
    const response=await fetch(ENDPOINT)
    const quoteData=await response.json()
    console.log(quoteData)
    return quoteData
}


async function getId(){
    const quoteData=await getQuote()  
    const id=await quoteData._id
    return id
}

async function displayAuthorContent(){
    const ID=getId()
    const quoteData=await getQuote()
    if(quoteData.id=ID){
        quoteText.textContent=quoteData.content 
        authorText.textContent=quoteData.author        
    }
    else{
        return ("error")
    }
}

