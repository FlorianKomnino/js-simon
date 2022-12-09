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
                centsElement.innerHTML = cents % 10;
                decSecElement.innerHTML = Math.floor(cents / 10);
            } else if (cents < 999){
                //condizione che influenza dai secondi in giu
                cents++;
                centsElement.innerHTML = (cents % 10);
                decSecElement.innerHTML = Math.floor((cents % 100) / 10);
                secondsElement.innerHTML = Math.floor(cents / 100);
            } else if (cents < 5999){
                //condizione che influenza dalle decine di secondi in giu
                cents++;
                centsElement.innerHTML = cents % 10;
                decSecElement.innerHTML = Math.floor((cents % 100) / 10);
                secondsElement.innerHTML = Math.floor((cents % 1000) / 100);
                tenSecsElement.innerHTML = Math.floor(cents / 1000) ;
            } else if (cents < 59999){
                //condizione che influenza dai minuti in giu
                cents++;
                centsElement.innerHTML = cents % 10;
                decSecElement.innerHTML = Math.floor((cents % 100) / 10);
                secondsElement.innerHTML = Math.floor((cents % 1000) / 100);
                tenSecsElement.innerHTML = Math.floor((cents % 6000) / 1000);
                minutesElement.innerHTML = Math.floor(cents / 6000);
            } else {
                centsElement.innerHTML = cents % 10;
                decSecElement.innerHTML = Math.floor((cents % 100) / 10);
                secondsElement.innerHTML = Math.floor((cents % 1000) / 100);
                tenSecsElement.innerHTML = Math.floor((cents % 6000) / 1000);
                minutesElement.innerHTML = Math.floor(cents / 60000);
                tenMinutesElement.innerHTML = Math.floor(cents / 60000);
            }
        }, 10);

        if (!existingEventListenerPauseButton) {
            pausa.addEventListener('click', function () {
                console.log('Hello World!')
                clearInterval(centsTime);

                timerWorking = false;
            })
        }

        if (!existingEventListenerResetButton) {

            azzera.addEventListener('click', function () {
                console.log('Hello World!')
                clearInterval(centsTime);

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