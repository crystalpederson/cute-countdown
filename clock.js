
//pick year dynamically
const today = new Date();
const currentYear = today.getFullYear()
const nextYear = currentYear + 1;


const holidays = {
    halloween: 'October 31, ' + currentYear +' 00:00:00',
    thanksgiving: 'November 25, 2021 00:00:00',
    christmas: 'December 25, 2021 00:00:00'
}

  //set value of selected holiday
  let selectedHoliday = holidays['thanksgiving']
  
  //set a parameter for date you want to countdown towards
  let countDownDate = new Date(selectedHoliday);

  // Find the difference in milliseconds between now and the count down date
  let distance = countDownDate.getTime() - today.getTime();

  // Convert milliseconds to days
  let days = Math.floor(distance / (1000 * 60 * 60 * 24)) + 1;
 
  //check to see if holiday has passed yet
    //if so, count down to holiday of next year
  if(days < 0){
    days += 365
  }

  function halloween(dayValue) {

  //check to see if today is halloween. If so, say that it's halloween.
  if(dayValue === 0){
    document.getElementById("countdown").innerHTML = "Today is Halloween!"
  }else{
    // Display the result in the element with id="demo"
  document.getElementById("countdown").innerHTML = dayValue + " days until " + "Halloween!";
  }
  
  let page = document.querySelector('body')
  page.setAttribute("style", "background-color: orange;")
  
  //add gif
  let gif = document.getElementById("displayImg")
  gif.src = "images/pusheen_witch.gif";
}

//created the same func for thanksgiving and added a new gif
function thanksgiving(days) {

   //check to see if Thanksgiving has passed yet
     //if so, count down to Thanksgiving of next year
   if(days < 0){
     days += 365
   }
   
   //check to see if today is Thanksgiving. If so, say that it's Thanksgiving.
   if(days === 0){
     document.getElementById("countdown").innerHTML = "Today is Thanksgiving!"
   }else{
     // Display the result in the element with id="demo"
   document.getElementById("countdown").innerHTML = days + " days until " + "Thanksgiving!";
   }
   
   let page = document.querySelector('body')
   page.setAttribute("style", "background-color: #faefa5;")
   
   //add gif
   let gif = document.getElementById("displayImg")
   gif.src = "images/pusheen_thanksgiving.gif";
 }
 
 //created the func for christmas and added a new gif
 function christmas(days) {

   //check to see if today is christmas. If so, say that it's halloween.
   if(days === 0){
     document.getElementById("countdown").innerHTML = "Today is Christmas!"
   }else{
     // Display the result in the element with id="demo"
   document.getElementById("countdown").innerHTML = days + " days until " + "Christmas!";
   }
   
   let page = document.querySelector('body')
   page.setAttribute("style", "background-color: #bdf4ff;")
   
   //add gif
   let gif = document.getElementById("displayImg")
   gif.src = "images/pusheen_christmasgif.gif";
 }
 
 //load the page
thanksgiving(days);