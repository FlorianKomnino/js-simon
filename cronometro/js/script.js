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

let timerWorking = false;
let existingEventListenerPauseButton = false;
let existingEventListenerResetButton = false;


let centsTime;
let decSecTime;
let secondsTime;
let tenSecsTime;
let minutesTime;
let tenMinutesTime;



avvia.addEventListener("click", function () {
    if (!timerWorking) {

        centsTime = setInterval(() => {
            if (cents < 9) {
                //condizione che influenza solo i centesimi di secondo
                cents++;
                centsElement.innerHTML = cents;
            } else if (cents < 99){
                //condizione che influenza dai decimi di secondo in giu
                cents++;
                centsElement.innerHTML = cents.toString()[cents.toString().length - 1];
                decSecElement.innerHTML = cents.toString()[cents.toString().length - 2];
            } else if (cents < 999){
                //condizione che influenza dai secondi di secondo in giu
                cents++;
                centsElement.innerHTML = cents.toString()[cents.toString().length - 1];
                decSecElement.innerHTML = cents.toString()[cents.toString().length - 2];
                secondsElement.innerHTML = cents.toString()[cents.toString().length - 3];
            } else if (cents < 9999){
                //condizione che influenza dalle decine di secondi in giu
                cents++;
                centsElement.innerHTML = cents.toString()[cents.toString().length - 1];
                decSecElement.innerHTML = cents.toString()[cents.toString().length - 2];
                secondsElement.innerHTML = cents.toString()[cents.toString().length - 3];
                tenSecsElement.innerHTML = cents.toString()[cents.toString().length - 4];
            } else if (cents < 9999){
                //condizione che influenza dai minuti di secondo in giu
                cents++;
                centsElement.innerHTML = cents.toString()[cents.toString().length - 1];
                decSecElement.innerHTML = cents.toString()[cents.toString().length - 2];
                secondsElement.innerHTML = cents.toString()[cents.toString().length - 3];
                tenSecsElement.innerHTML = cents.toString()[cents.toString().length - 4];
                minutesElement.innerHTML = cents.toString()[cents.toString().length - 5];
            }
        }, 10);
/*
        centsTime = setInterval(() => {
            if (cents < 9) {
                cents++;
                centsElement.innerHTML = cents
            } else {
                cents = 0
                centsElement.innerHTML = cents
            }
        }, 10);

        decSecTime = setInterval(() => {
            if (decSec < 9) {
                decSec++;
            } else if (decSec < 99) {
                decSec++;
                decSecElement.innerHTML = String(decSec)[0];
            } else {
                decSec = 0
                decSecElement.innerHTML = String(decSec)[0];
            }
        }, 10);

        secondsTime = setInterval(() => {
            if (seconds < 99) {
                seconds++;
            } else if (seconds < 999) {
                seconds++;
                secondsElement.innerHTML = String(seconds)[0];
            } else {
                seconds = 0
                secondsElement.innerHTML = String(seconds)[0];
            }
        }, 10);

        tenSecsTime = setInterval(() => {
            if (tenSecs < 999) {
                tenSecs++;
            } else if (tenSecs < 9999) {
                tenSecs++;
                tenSecsElement.innerHTML = String(tenSecs)[0];
            } else {
                tenSecs = 0
                tenSecsElement.innerHTML = String(tenSecs)[0];
            }
        }, 10);

        minutesTime = setInterval(() => {
            if (minutes < 59999) {
                minutes++;
            } else if (minutes < 599999) {
                minutes++;
                minutesElement.innerHTML = String(minutes)[0];
            } else {
                minutes = 0
                minutesElement.innerHTML = String(minutes)[0];
            }
        }, 10);

        tenMinutesTime = setInterval(() => {
            if (tenMinutes < 599999) {
                tenMinutes++;
            } else if (tenMinutes < 5999999) {
                tenMinutes++;
                tenMinutesElement.innerHTML = String(tenMinutes)[0];
            } else {
                tenMinutes = 0
                tenMinutesElement.innerHTML = String(tenMinutes)[0];
            }
        }, 10);

*/
        if (!existingEventListenerPauseButton) {
            pausa.addEventListener('click', function () {
                console.log('Hello World!')
                clearInterval(centsTime);
                clearInterval(decSecTime);
                clearInterval(secondsTime);
                clearInterval(tenSecsTime);
                clearInterval(minutesTime);
                clearInterval(tenMinutesTime);

                timerWorking = false;
            })
        }

        if (!existingEventListenerResetButton) {

            azzera.addEventListener('click', function () {
                console.log('Hello World!')
                clearInterval(centsTime);
                clearInterval(decSecTime);
                clearInterval(secondsTime);
                clearInterval(tenSecsTime);
                clearInterval(minutesTime);
                clearInterval(tenMinutesTime);

                cents = 0;
                decSec = 0;
                seconds = 0;
                tenSecs = 0;
                minutes = 0;
                tenMinutes = 0;
                tenMinutesElement.innerHTML = tenMinutes;
                minutesElement.innerHTML = minutes;
                tenSecsElement.innerHTML = tenSecs;
                secondsElement.innerHTML = seconds;
                decSecElement.innerHTML = decSec;
                centsElement.innerHTML = cents;

                timerWorking = false;
            })
        }

        existingEventListenerPauseButton = true
        existingEventListenerResetButton = true

        timerWorking = true;
    }
})