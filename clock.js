
//pick year dynamically
const today = new Date();
const currentYear = today.getFullYear()
const nextYear = currentYear + 1;

//object that contains the holiday options
const holidays = {
    "Valentine's Day": 'February 14, ' + currentYear +' 00:00:00',
    Halloween: 'October 31, ' + currentYear +' 00:00:00',
    Thanksgiving: 'November 25, 2021 00:00:00',
    Christmas: 'December 25, ' + currentYear +' 00:00:00',
    ptri5grad: 'June 4, 2022 00:00:00'
}


//this function calculates the number of days until the next selected holiday
function dayCounter(selectedHoliday){
      //set a parameter for date you want to countdown towards
  let countDownDate = new Date(holidays[selectedHoliday]);

  // Find the difference in milliseconds between now and the count down date
  let distance = countDownDate.getTime() - today.getTime();

  // Convert milliseconds to days
  let days = Math.floor(distance / (1000 * 60 * 60 * 24)) + 1;
 
  //check to see if holiday has passed yet
    //if so, count down to holiday of next year
  if(days < 0){
    days += 365
  }
  
  //check to see if today is holiday. If so, say that it is.
    if(days === 0){
      document.getElementById("countdown").innerHTML = "Today is " + selectedHoliday + "!"
    }else{
      // Display the result in the element with id="demo"
    document.getElementById("countdown").innerHTML = days + " days until " + selectedHoliday + "!";
    }
  return days;
  }
  

function halloween(days) {

  let page = document.querySelector('body')
  page.setAttribute("style", "background-color: #fcd2a4")
  
  //add gif
  let gif = document.getElementById("displayImg")
  gif.src = "images/pusheen_witch.gif";
}

//created the same func for thanksgiving and added a new gif
function thanksgiving(days) {

   let page = document.querySelector('body')
   page.setAttribute("style", "background-color: #faefa5;")
   
   //add gif
   let gif = document.getElementById("displayImg")
   gif.src = "images/pusheen_thanksgiving.gif";
 }
 
 //created the func for christmas and added a new gif
 function christmas(days) {
   
   let page = document.querySelector('body')
   page.setAttribute("style", "background-color: #bdf4ff;")
   
   //add gif
   let gif = document.getElementById("displayImg")
   gif.src = "images/pusheen_christmasgif.gif";
 }

  //created the func for christmas and added a new gif
  function valentines(days) {
   
    let page = document.querySelector('body')
    page.setAttribute("style", "background-color: #ffe3f4;")
    
    //add gif
    let gif = document.getElementById("displayImg")
    gif.src = "images/pusheen_valentines.gif";
  }

function ptriEnd(days) {
  //check to see if today is the holiday. If so, say that it is.
  if(days === 0){
    document.getElementById("countdown").innerHTML = "Today is PTRI 5's graduation day!"
  }else{
    // Display the result in the element with id="demo"
  document.getElementById("countdown").innerHTML = days + " days until " + "PTRI 5's graduation!";
  }
  
  let page = document.querySelector('body')
  page.setAttribute("style", "background-color: #e8dcfa;")
  
  //add gif
  let gif = document.getElementById("displayImg")
  gif.src = "images/pusheen_types.gif";
  gif.style.width = '50%';
  gif.style.height = '50%';
}

//let chosenHoliday = document.getElementById('holidaySelection').value;
//allows users to change which holiday is selected for the countdown
function save_Holiday(selectedDay){
  
  chrome.storage.sync.set({
    currentHoliday: selectedDay
  },
  
  //update status to let user know options were saved.
  function(){
    let status = document.getElementById('status');
    status.textContent= 'Countdown holiday changed!';
  });
}

//restores select box using the preferences stored in chrome.storage.
function restore_options(){
  chrome.storage.sync.get({
    currentHoliday: 'Halloween'
  }, function(items){
    document.getElementById('holidaySelection').value = items.currentHoliday;
    loadPage(document.getElementById('holidaySelection').value)
  })
}


//actual loading of the page based on which holiday is selected
function loadPage(holiday){
  // if value in chrom storage, set selectedHoliday to that value
  selectedHoliday = holiday;
  // else use default value

  if(selectedHoliday === 'Halloween'){
    halloween(dayCounter(selectedHoliday));
  }
  if(selectedHoliday === 'Thanksgiving'){
    thanksgiving(dayCounter(selectedHoliday));
  }
  if(selectedHoliday === 'Christmas'){
    christmas(dayCounter(selectedHoliday));
  }
  if(selectedHoliday === 'ptri5grad'){
    ptriEnd(dayCounter(selectedHoliday));
  }
  if(selectedHoliday === "Valentine's Day"){
    valentines(dayCounter(selectedHoliday));
  }
}
//when the save button is clicked, the selection is stored in chrome's storage
document.getElementById('save').addEventListener('click', function(event) {
  event.preventDefault();
  const holiday = document.getElementById('holidaySelection').value;
  console.log(holiday);
  save_Holiday(holiday);
})

//When the page is loaded, the last selection is restored in the selection box
document.addEventListener('DOMContentLoaded', restore_options)

