// Set the date we're counting down to
var countDownDate = new Date("Jul 4, 2018 15:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
 // document.getElementById("contador").innerHTML = days + "d " + hours + "h "
//+ minutes + "m " + seconds + "s ";
    document.querySelector('#day').innerHTML = days;
    document.querySelector('#hora').innerHTML = hours;
    document.querySelector('#minuto').innerHTML = minutes;
    document.querySelector('#segundo').innerHTML = seconds;
  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("contador").innerHTML = "Felicidades";
  }
}, 1000);
eventosinit();
function eventosinit() {
  document.addEventListener('DOMContentLoaded', appinit);
}
function appinit() {
  
  var spinner = document.getElementById('spinner');
  spinner.style.display = 'block';
  var main = document.getElementById('main');
  main.style.display = 'none';
  var loader = document.getElementById('loader');
  loader.style.display = 'block';
 
  setTimeout(function() {
    spinner.style.display = 'none';
    main.style.display = 'block';
    loader.style.display = 'none';
    console.log('hello');
  }, 9000);
}