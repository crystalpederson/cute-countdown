// setInterval(
//     function() {
//         let date = new Date();
//         document.getElementById("clock").innerHTML = date.getDay() + ":" + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
//  }, 1000);

const holidays = {
    halloween: 'October 31, 2021 00:00:00',
    thanksgiving: 'November 25, 2021 00:00:00',
    christmas: 'December 25, 2021 00:00:00'
}

//set a parameter for date you want to countdown towards
let countDownDate = new Date(holidays['halloween']);

// Update the count down every 1 second
setInterval(
    function() {

      // Get today's date and time
      let today= new Date();

  // Find the distance between now and the count down date
  let distance = countDownDate.getTime() - today.getTime();

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  //let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  // Display the result in the element with id="demo"
  document.getElementById("countdown").innerHTML = days + " days until " + "Halloween!";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 0);