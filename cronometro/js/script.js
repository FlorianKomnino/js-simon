console.log('Hello World!');

let centesimi = document.getElementById('centesimi');
let secondi = document.getElementById('secondi');
let minuti = document.getElementById('minuti');

let avvia = document.getElementById('avvia');
let pausa = document.getElementById('pausa');
let azzera = document.getElementById('azzera');

let cents = 0;
let seconds = 0;
let minutes = 0;

avvia.addEventListener('click', myFunction(cents, centesimi))

function myFunction(cheackVariable, element) {
    let index = 1
    for (index; index<100 ; index++) {
        let clock = setInterval(numberChanger, 10, cheackVariable, element);
        if (cheackVariable = 100){
            clearInterval(clock);
        }
    }
}

function numberChanger(element, cheackVariable){
    element.innerHTML = i;
    cheackVariable++;
}