/*
 This is a modified version of the w3 school countdown example.
 ORIGINAL VERSION OF W3 SCHOOL COUNTDOWN EXAMPLE -  https://www.w3schools.com/howto/howto_js_countdown.asp
*/


const END_DATE = "January 31, 2019 00:00:00"; // Date That I'm Aiming For
const END_OF_DATE_MESSAGE = "UH OH, I'm late"; // Sets A Message When The Date Expires
const REFRESH_RATE_MS = 1000; // Sets The Refresh Rate In Milliseconds

const SECONDS_IN_MINUTES = 60; // 60 seconds in 1 minute
const MINUTES_IN_HOURS = 60; // 60 minutes in 1 hour
const HOURS_IN_DAY = 24; // 24 hours in 1 day
const MILLISECONDS_IN_SECONDS = 1000; // 1000 Milliseconds in 1 second

// Set The Date We Are Counting Down To
let countdownEndDate = new Date(END_DATE).getTime();

// Anonymous Function That Calls A Function At Specific Intervals
let refreshCountdownTimer = setInterval(function() {
  document.getElementById("timer").textContent = "";

  // Gets The Current Time
  let currentTime = new Date().getTime();

  // Find The Time Difference Between Now And The End Date
  let timeDifference = countdownEndDate - currentTime;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(timeDifference / (MILLISECONDS_IN_SECONDS *  SECONDS_IN_MINUTES * MINUTES_IN_HOURS * HOURS_IN_DAY));
  let hours = Math.floor((timeDifference % (MILLISECONDS_IN_SECONDS * SECONDS_IN_MINUTES * MINUTES_IN_HOURS * HOURS_IN_DAY)) / (MILLISECONDS_IN_SECONDS * SECONDS_IN_MINUTES * MINUTES_IN_HOURS));
  let minutes = Math.floor((timeDifference % (MILLISECONDS_IN_SECONDS * SECONDS_IN_MINUTES * MINUTES_IN_HOURS )) / (MILLISECONDS_IN_SECONDS * SECONDS_IN_MINUTES));
  let seconds = Math.floor((timeDifference % (MILLISECONDS_IN_SECONDS * SECONDS_IN_MINUTES)) / MILLISECONDS_IN_SECONDS);

  // Display the result in the element with id="timer"
  let timer = days + "d" + " " + hours + "h" + " " + minutes + "m" + " " + seconds + "s";

  // Seperate the string into individual characters and apply a class if it has content
  for (let i = 0, len = timer.length; i < len; i++) {
    let newSpan = document.createElement("SPAN");
    newSpan.textContent = timer.charAt(i);
    if(timer.charAt(i) !== ' '){
      newSpan.setAttribute('class', 'letter-styling');
      document.getElementById('timer').appendChild(newSpan);
    }
    else{
      newSpan.setAttribute('class', 'other-styling');
      document.getElementById('timer').appendChild(newSpan);
    }
  }

  // When the countdown ends, write some text
  if (timeDifference < 0) {
    clearInterval(REFRESH_RATE_MS);
    document.getElementById("message").textContent = END_OF_DATE_MESSAGE;
  }
}, REFRESH_RATE_MS);
