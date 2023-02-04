const daysTag = document.querySelector(".days"),
currentDate = document.querySelector(".current-date"),
prevNextIcon = document.querySelectorAll(".icons span");
let add= document.querySelector('#add')
const clear=document.querySelector('#delete')
let events=document.querySelector('#event')
let dateIsClicked=false;


const viewportWidth = window.innerWidth;
console.log(viewportWidth)

// getting new date, current year and month
let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();
// storing full name of all months in array
const months = ["January", "February", "March", "April", "May", "June", "July",
              "August", "September", "October", "November", "December"];
const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), // getting first day of month
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // getting last date of month
    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), // getting last day of month
    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // getting last date of previous month
    let liTag = "";
    for (let i = firstDayofMonth; i > 0; i--) { // creating li of previous month last days
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }
    for (let i = 1; i <= lastDateofMonth; i++) { // creating li of all days of current month
        // adding active class to li if the current day, month, and year matched
        let isToday = i === date.getDate() && currMonth === new Date().getMonth() 
                     && currYear === new Date().getFullYear() ? "active" : "";
        liTag += `<li class="date ${isToday}">${i}</li>`;
    }
    for (let i = lastDayofMonth; i < 6; i++) { // creating li of next month first days
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
    }  
    currentDate.innerText = `${months[currMonth]} ${currYear}`; // passing current mon and yr as currentDate text
    daysTag.innerHTML = liTag;
   
}
renderCalendar();
prevNextIcon.forEach(icon => { // getting prev and next icons
    icon.addEventListener("click", () => { // adding click event on both icons
        // if clicked icon is previous icon then decrement current month by 1 else increment it by 1
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;
        if(currMonth < 0 || currMonth > 11) { // if current month is less than 0 or greater than 11
            // creating a new date of current year & month and pass it as date value
            date = new Date(currYear, currMonth, new Date().getDate());
            currYear = date.getFullYear(); // updating current year with new date year
            currMonth = date.getMonth(); // updating current month with new date month
        } 
        renderCalendar(); // calling renderCalendar function
    });
});

allDates=document.querySelectorAll('.date')
console.log(allDates)
for (let i = 0; i < allDates.length; i++) {
    allDates[i].addEventListener("click", function(){
        isClicked(i);

    })
}      
              
function isClicked(i){
    events.textContent='no result'
    if (dateIsClicked===false){   
        for (let j = 0; j < allDates.length; j++) {
            allDates[j].style.border = '';
            allDates[j].style.borderRadius = "";
        }

        allDates[i].style.border = "1px solid grey";
        allDates[i].style.borderRadius = "50%";
        }
        i=i+1
        localStorage.setItem('date',i)
        dateData=localStorage.getItem('item')
        dateArray=JSON.parse(dateData)
        console.log(i)
        if (dateData){    
            console.log('dateData exist')      
            for (k=0; k<dateArray.length; k++){ 
                console.log(dateArray[k]) 
                if (dateArray[k]===`${i}`){
                    console.log('date match')
                    retrieveData(i)
                }
            }
        }
        
    }       


add.addEventListener('click',function(){
    addTodo()
})

function addTodo(){
    window.location.href='http://127.0.0.1:5002/home.html' 
}

function retrieveData(i){ 

    const storedEventName = window.localStorage.getItem('events');
    storedEvent=JSON.parse(storedEventName) 

        if (storedEvent){
            events.textContent=storedEvent[i-1]
        }

        else{
            events.textContent=' no events'
        }     
    }



clear.addEventListener("click", function(){
    clearLocalStorage()
})

function clearLocalStorage(){
    localStorage.clear()
}

   


 


