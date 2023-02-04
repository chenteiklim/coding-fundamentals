
let storedEventName = window.localStorage.getItem("events");
let storedEvent = JSON.parse(storedEventName);  
let confirmBtn=document.querySelector('#confirmBtn')
    
confirmBtn.addEventListener("click", function() {
    eventName= document.querySelector('input').value;
    eventsArray = [];
    datesArray=[];
    var storedEvents = localStorage.getItem('events');
    if (storedEvents) {
        eventsArray = JSON.parse(storedEvents);
    }
    eventsArray.push(eventName)
    localStorage.setItem('events', JSON.stringify(eventsArray))

    var storedDates = localStorage.getItem('item')
    if (storedDates) {
        datesArray=JSON.parse(storedDates)
    }
    
    var storedDate = localStorage.getItem('date')
    if (storedDate) {
        datesArray.push(storedDate)
        localStorage.setItem('item', JSON.stringify(datesArray));
    }
   
 window.location.href = "http://127.0.0.1:5002/index.html" 
})
    


