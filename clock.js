// setInterval(
//     function() {
//         let date = new Date();
//         document.getElementById("clock").innerHTML = date.getDay() + ":" + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
//  }, 1000);


//pick year dynamically
const today = new Date();
const currentYear = today.getFullYear()
const nextYear = currentYear + 1;


const holidays = {
    halloween: 'October 31, ' + currentYear +' 00:00:00',
    thanksgiving: 'November 25, 2021 00:00:00',
    christmas: 'December 25, 2021 00:00:00'
}


function halloween() {

 //set a parameter for date you want to countdown towards
  let countDownDate = new Date(holidays['halloween']);

  // Find the distance between now and the count down date
  let distance = countDownDate.getTime() - today.getTime();

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24)) + 1;
  //let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  
  //check to see if halloween has passed yet
    //if so, count down to halloween of next year
  if(days < 0){
    days += 365
  }
  
  //check to see if today is halloween. If so, say that it's halloween.
  if(days === 0){
    document.getElementById("countdown").innerHTML = "Today is Halloween!"
  }else{
    // Display the result in the element with id="demo"
  document.getElementById("countdown").innerHTML = days + " days until " + "Halloween!";
  }
  
  let page = document.querySelector('body')
  page.setAttribute("style", "background-color: orange;")
  
  //add gif
  let gif = document.getElementById("displayImg")
  gif.src = "images/pusheen_witch.gif";
}

//load the page
//backslached all the function calls to see if we can invoke
//the func when we click the button on popup.html
//halloween();


//created the same func for thanksgiving and added a new gif
function thanksgiving() {

  //set a parameter for date you want to countdown towards
   let countDownDate = new Date(holidays['thanksgiving']);
 
   // Find the distance between now and the count down date
   let distance = countDownDate.getTime() - today.getTime();
 
   // Time calculations for days, hours, minutes and seconds
   let days = Math.floor(distance / (1000 * 60 * 60 * 24)) + 1;
   //let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   
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
   page.setAttribute("style", "background-color: orange;")
   
   //add gif
   let gif = document.getElementById("displayImg")
   gif.src = "images/pusheen_thanksgiving.gif";
 }
 
 //load the page
 //thanksgiving();


 //created the func for christmas and added a new gif
 function christmas() {

  //set a parameter for date you want to countdown towards
   let countDownDate = new Date(holidays['christmas']);
 
   // Find the distance between now and the count down date
   let distance = countDownDate.getTime() - today.getTime();
 
   // Time calculations for days, hours, minutes and seconds
   let days = Math.floor(distance / (1000 * 60 * 60 * 24)) + 1;
   //let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   
   //check to see if Christmas has passed yet
     //if so, count down to christmas of next year
   if(days < 0){
     days += 365
   }
   
   //check to see if today is christmas. If so, say that it's halloween.
   if(days === 0){
     document.getElementById("countdown").innerHTML = "Today is Christmas!"
   }else{
     // Display the result in the element with id="demo"
   document.getElementById("countdown").innerHTML = days + " days until " + "Christmas!";
   }
   
   let page = document.querySelector('body')
   page.setAttribute("style", "background-color: orange;")
   
   //add gif
   let gif = document.getElementById("displayImg")
   gif.src = "images/pusheen_christmasgif.gif";
 }
 
 //load the page
 //christmas();