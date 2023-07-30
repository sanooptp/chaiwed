// The rest of your JavaScript code here
function startTimer(endDate, display) {
    function updateTimer() {
      var now = new Date();
      var timeRemaining = endDate - now;
  
      if (timeRemaining <= 0) {
        clearInterval(timerInterval);
        display.textContent = "Hurray, Its Wedding Day!";
        return;
      }
  
      var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  
      days = days < 10 ? "0" + days : days;
      hours = hours < 10 ? "0" + hours : hours;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
  
      document.getElementById("days").textContent = days;
      document.getElementById("hours").textContent = hours;
      document.getElementById("minutes").textContent = minutes;
      document.getElementById("seconds").textContent = seconds;
    }
  
    var timerInterval = setInterval(updateTimer, 1000);
    updateTimer(); // Call once to avoid delay in showing the initial time
  }
  
  // Set the end date and time for the timer
  var endDate = new Date("2023-09-03T11:59:59"); // Example: December 31, 2023, 23:59:59
  
  // Start the timer when the page loads
  document.addEventListener("DOMContentLoaded", function () {
    var display = document.getElementById("timer");
    startTimer(endDate, display);
  });
  

  