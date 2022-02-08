
// Set the date we're counting down to
var countDownDate = new Date("Febru 10, 2022 15:37:25").getTime();// Update the count down every 1 second
var x = setInterval(function() { // Get today's date and time
var now = new Date().getTime();
// Find the distance between now and the count down date
var distance = countDownDate - now;
// Time calculations for days, hours, minutes and seconds
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);
// Output the result in an element with id="demo"
document.getElementById("dias").innerHTML = days;
document.getElementById("horas").innerHTML = hours;
document.getElementById("minutos").innerHTML = minutes;
document.getElementById("segundos").innerHTML = seconds;
// If the count down is over, write some text
if (distance < 0) {
clearInterval(x);
document.getElementById("demo").innerHTML = "O foguete já partiu";
document.getElementById("dias").innerHTML = "00";
document.getElementById("horas").innerHTML = "00";
document.getElementById("minutos").innerHTML = "00";
document.getElementById("segundos").innerHTML = "00";
}
}, 1000);

function ação(){
    let modal = document.querySelector('.modal')
    modal.style.display = 'block';
}

function enviar(){
    let modal = document.querySelector('.modal')
    modal.style.display = 'none';
}

