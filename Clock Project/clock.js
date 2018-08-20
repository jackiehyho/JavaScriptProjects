/*

 ORIGINAL VERSION OF W3 SCHOOL COUNTDOWN EXAMPLE -  https://www.w3schools.com/howto/howto_js_countdown.asp
*/


const END_DATE = "January 5, 2019 15:37:25"; // 
const END_OF_DATE_MESSAGE = "UH OH, I'm late"; // Sets A Message When The Date Expires
const REFRESH_RATE = 1000; // Sets The Refresh Rate In Milliseconds


// Set The Date We Are Counting Down To
let countDownDate = new Date(END_DATE).getTime();

//
let refreshCountdownTimer = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("timer").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = END_OF_DATE_MESSAGE;
  }
}, REFRESH_RATE);
