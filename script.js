// ============================================
//  WARM-UP: Day Name
// ============================================
// Display today's day name (e.g., "Monday") in the
// element with ID "warmUpDate".

// STEP 1: Create a new Date object using: let now = new Date();
let now = new Date();

// STEP 2: Use .getDay() to get the day of the week as a number.
//         Sunday = 0, Monday = 1, Tuesday = 2, ... Saturday = 6
let dayNumber = now.getDay();

// STEP 3: Create an array of day names:
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// STEP 4: Use the day number as an index to get the day name from the array.
let dayName = days[dayNumber];

// STEP 5: Display the day name in the element with ID "warmUpDate"
document.getElementById("warmUpDate").innerHTML = dayName;


// ============================================
//  PART 1: Current Date Display
// ============================================
// Display the current date in the format: M/D/YYYY
// in the element with ID "myDate".

// STEP 6: Create a new Date object (or reuse the one from above).
// (Using 'now' variable declared above)

// STEP 7: Get the month using .getMonth() (+ 1 for correct month number)
let month = now.getMonth() + 1;

// STEP 8: Get the day of the month using .getDate()
let date = now.getDate();

// STEP 9: Get the year using .getFullYear()
let year = now.getFullYear();

// STEP 10: Build the date string: month + "/" + day + "/" + year
document.getElementById("myDate").innerHTML = month + "/" + date + "/" + year;


// ============================================
//  PART 2: Elapsed Timer
// ============================================
// Build a timer that counts up from 0, updating every ~10ms.

// STEP 11: Record the start time using new Date().getTime()
let startTime = new Date().getTime();

// STEP 12: Create a variable to hold the timer ID (for stopping later).
let timerId;

function startTimer() {
  timerId = setInterval(function() {
    // a) Get the current time
    let currentTime = new Date().getTime();
    // b) Calculate elapsed seconds
    let elapsedSeconds = (currentTime - startTime) / 1000;
    // c) Display the elapsed time using .toFixed(3)
    document.getElementById("myTimer").innerHTML = elapsedSeconds.toFixed(3);
  }, 10);
}

// Initial start execution
startTimer();


// ============================================
//  PART 3: Start/Stop Toggle Button
// ============================================

// STEP 13: Create a variable to track whether the timer is currently running
let running = true;

// STEP 14: Add a click event listener to the button (ID "myBtn").
document.getElementById("myBtn").addEventListener("click", function() {
  // a) If running is true: stop it
  if (running) {
    clearInterval(timerId);
    document.getElementById("myBtn").innerHTML = "Start";
    running = false;
  } 
  // b) If running is false: restart it from 0
  else {
    startTime = new Date().getTime();
    startTimer();
    document.getElementById("myBtn").innerHTML = "Stop";
    running = true;
  }
});