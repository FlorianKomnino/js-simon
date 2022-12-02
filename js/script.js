console.log('Hello World!');

let button = document.getElementById('playButton');

let counter = 0;

let stopper;

let gameOver = false;

button.addEventListener ('click', function() {
    if (!gameOver) {
        counter++;
        if ( counter < 10) {
            button.innerHTML = `#${counter}`
        } else if (counter == 10) {
            button.innerHTML = `#${counter}`
            button.style.backgroundColor = 'red';
            setTimeout( function() {
                counter = 0;
                button.innerHTML = `#${counter}`
                button.style.backgroundColor = '';
            }, 5000)
        }
    }




})