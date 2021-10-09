
//allows users to change which holiday is selected for the countdown
function save_Holiday(){

  let chosenHoliday = document.getElementById('holidaySelection').value;
  
  chrome.storage.sync.set({
    currentHoliday: chosenHoliday
  },
  
  //update status to let user know options were saved.
  function(){
    let status = document.getElementById('status');
    status.textContent= 'Countdown holiday changed to ' + chosenHoliday + "!";
  }); 
}

//restores select box and checkbox stat using the preferences stored in chrome.storage.
function restore_options(){
  chrome.storage.sync.get({
    currentHoliday: 'Halloween'
  }, function(items){
    document.getElementById('holidaySelection').value = items.currentHoliday;
  })
}

document.addEventListener('DOMContentLoaded', restore_options)
document.getElementById('save').addEventListener('click', save_Holiday);


// let page = document.getElementById("buttonDiv");
// let selectedClassName = "current";
// const presetButtonColors = ["#3aa757", "#e8453c", "#f9bb2d"];
// //const presetHolidays = [["#3aa757", "halloween"], ["#e8453c", "thanksgiving"], ["#f9bb2d", "christmas"];


// // Reacts to a button click by marking the selected button and saving the selection
// function handleButtonClick(event) {
//   // Remove styling from the previously selected color
//   let current = event.target.parentElement.querySelector(
//     `.${selectedClassName}`
//   );
//   if (current && current !== event.target) {
//     current.classList.remove(selectedClassName);
//   }

//   // Mark the button as selected
//   let color = event.target.dataset.color;
//   event.target.classList.add(selectedClassName);
//   chrome.storage.sync.set({ color });
// }

// // Add a button to the page for each supplied color
// function constructOptions(buttonColors) {
//   chrome.storage.sync.get("color", (data) => {
//     let currentColor = data.color;

//     // For each color we were provided…
//     for (let buttonColor of buttonColors) {
//       // …create a button with that color…
//       let button = document.createElement("button");
//       button.dataset.color = buttonColor;
//       button.style.backgroundColor = buttonColor;

//       // …mark the currently selected color…
//       if (buttonColor === currentColor) {
//         button.classList.add(selectedClassName);
//       }

//       // …and register a listener for when that button is clicked
//       button.addEventListener("click", handleButtonClick);
//       page.appendChild(button);
//     }
//   });
// }

// // Initialize the page by constructing the color options
// constructOptions(presetButtonColors);
