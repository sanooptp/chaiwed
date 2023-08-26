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
  

  const textArray = [
    "I choose you.",
    "And I'll choose you over and over and over.",
    "Without pause, without a doubt, in a heartbeat.",
    "I'll keep choosing you."
  ];
  
  const typewriter = document.querySelector(".typewriter .line");
  let lineIndex = 0;
  let charIndex = 0;
  
  function typeText() {
    if (lineIndex < textArray.length) {
      const currentLine = textArray[lineIndex];
      // typewriter.textContent = currentLine.substring(0, charIndex);
      charIndex++;
      if (charIndex > currentLine.length) {
        charIndex = 0;
        lineIndex++;
        setTimeout(typeText, 1000); // Delay between lines
      } else {
        setTimeout(typeText, 100); // Typing speed within a line
      }
    }
  }
  
  typeText();
  

document.getElementById('addToGoogleCalendarButton').addEventListener('click', function() {
    var eventTitle = 'Chaithra&Anoop Wedding';
    var eventDate = '2023-09-03'; // Format: YYYY-MM-DD
    var eventStartTime = '11:00'; // Format: HH:MM (24-hour)
    var eventEndTime = '14:00'; // Format: HH:MM (24-hour)
    var eventLocation = 'Thazhathu House';
    var eventDetails = 'Chaitra&Anoop Wedding';

    var googleCalendarUrl = 'https://www.google.com/calendar/render?action=TEMPLATE' +
      '&text=' + encodeURIComponent(eventTitle) +
      '&dates=' + encodeURIComponent(eventDate + 'T' + eventStartTime + '00Z/' + eventDate + 'T' + eventEndTime + '00Z') +
      '&location=' + encodeURIComponent(eventLocation) +
      '&details=' + encodeURIComponent(eventDetails);

    window.open(googleCalendarUrl, '_blank');
  });


  const carouselItems = document.querySelectorAll('.carousel-item');
 let currentItem = 0;
 
 function showNextItem() {
     carouselItems[currentItem].style.opacity = '0';
     currentItem = (currentItem + 1) % carouselItems.length;
     carouselItems[currentItem].style.opacity = '1';
 }
 
 setInterval(showNextItem, 3000); // Change image every 3 seconds
 
 

 const image = document.querySelector('.flower3');

// Function to check if an element is in the viewport
function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to apply the animation class when the image is in the viewport
function animateImageOnScroll() {
    if (isElementInViewport(image)) {
        image.classList.add('animate');
        window.removeEventListener('scroll', animateImageOnScroll);
    }
}

