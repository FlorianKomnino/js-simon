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



function getNumberScrollingTo10(value, element, time) {
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

function getNumberScrollingTo6(value, element, time) {
    setInterval(() => {
        if (value < 6) {
            value++;
            element.innerHTML = value
        } else {
            value = 0
            element.innerHTML = value
        }
    }, time);
}




avvia.addEventListener("click", function () {
    getNumberScrollingTo10(cents, centsElement, 10);
    getNumberScrollingTo10(decSec, decSecElement, 100);
    getNumberScrollingTo10(seconds, secondsElement, 1000);
    getNumberScrollingTo6(tenSecs, tenSecsElement, 10000);
    getNumberScrollingTo10(minutes, minutesElement, 60000);
    getNumberScrollingTo6(tenSecs, tenMinutesElement, 600000);
})