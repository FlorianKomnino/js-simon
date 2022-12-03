console.log('Hello World!');

let centsElement = document.getElementById('cents');
let decSecElement = document.getElementById('decSec');
let secondsElement = document.getElementById('seconds');
let tenSecsElement = document.getElementById('tenSecs');
let minutesElement = document.getElementById('minutes');
let tenMinutesElement = document.getElementById('tenMinutes');

let avvia = document.getElementById('avvia');
let pausa = document.getElementById('pausa');
let azzera = document.getElementById('azzera');

let cents = 0;
let decSec = 0;
let seconds = 0;
let tenSecs = 0;
let minutes = 0;
let tenMinutes = 0;



function getNumberScrolling(value, element, time) {
    setInterval(() => {
        if (value < 9) {
            value++;
            element.innerHTML = value
        } else {
            value = 0
            element.innerHTML = value
        }
    }, time);
}




avvia.addEventListener("click", function () {
    getNumberScrolling(cents, centsElement, 10);
    getNumberScrolling(decSec, decSecElement, 100);
    getNumberScrolling(seconds, secondsElement, 1000);
    getNumberScrolling(tenSecs, tenSecsElement, 10000);
    getNumberScrolling(tenSecs, minutesElement, 60000);
    getNumberScrolling(tenSecs, tenMinutesElement, 600000);
})