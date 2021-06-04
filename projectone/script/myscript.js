const popup = document.getElementById('popup-container');

const finalMessage = document.getElementById('final-message');


function instruction() {

    finalMessage.innerText = 'You have to spell the animal name but remember you only have 3 lives! 😃';
    popup.style.display = 'flex';

}