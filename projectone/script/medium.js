let animals = [{
    name: "CAT",
    image: "images/cat.png"
}, {
    name: "DOG",
    image: "images/dog.png"
}, {
    name: "BEAR",
    image: "images/bear.png"
}, {
    name: "PIG",
    image: "images/pig.png"
}, {
    name: "HORSE",
    image: "images/horse.png"
}, {
    name: "BEAVER",
    image: "images/beaver.png"
},
{
    name: "BEETLE",
    image: "images/beetle.png"
}, {
    name: "CROCODILE",
    image: "images/crocodile.png"
}, {
    name: "ELEPHANT",
    image: "images/elephant.png"
}, {
    name: "HARBOR",
    image: "images/harbor.png"
},
{
    name: "BEE",
    image: "images/bee.png"
}, {
    name: "LAMB",
    image: "images/lamb.png"
}, {
    name: "PARROT",
    image: "images/parrot.png"
},
{
    name: "TRICERATOPS",
    image: "images/triceratops.png"
}

];

// const words = ["CAT", "DOG", "CAR", "BEAR", "SHARK"]

var selectedword = animals[Math.floor(Math.random() * animals.length)];

//var imagen = selectedword.image;

// document.getElementById("myImg").innerHTML



const popup = document.getElementById('popup-container');

const finalMessage = document.getElementById('final-message');


//console.log(selectedword);

let respuesta = selectedword.name;
console.log(respuesta);
document.querySelector("#hiddenImage").src = selectedword.image;

//obteniendo el id de cuadro 1
// let cuadro = document.getElementById('cuadro1');


// Variables para respuestas
let letraActual = 0;
let vidas = 3;
let resultado = [];
let resultadoPantalla = '';
// let vidasPantalla = '';

function verificar(letra) {

    if (letra === respuesta[letraActual]) {
        resultado.push(letra);
        // console.log("Perfect!");
        resultadoPantalla += resultado[letraActual];
        // console.log("Answer: " + resultado);
        letraActual++;

        // codigo para remover lista y desaparecer el cuadro

        if (letraActual >= 2) {
            document.querySelector("#hiddenImage").classList.remove('filter')
        }


        if (letraActual === respuesta.length) {
            // console.log("You win!");
            finalMessage.innerText = 'Congratulations! You won! 😃';
            popup.style.display = 'flex';
        }
    } else {
        vidas--;
        // console.log(letra + " is not the letter we're looking for...");
        // console.log("Remaining lives: " + vidas);


        if (vidas === 0) {
            // console.log("You lose! Sorry");
            // reiniciar();
            finalMessage.innerText = 'Unfortunately you lost. 😕';
            popup.style.display = 'flex';
        }
    }
    document.getElementById('hiddenWord').innerHTML = resultadoPantalla;
    document.getElementById('vidas').innerText = vidas;


}

function reiniciar() {
    // var selectedword = animals[Math.floor(Math.random() * animals.length)];
    // var respuesta = selectedword.name;
    // console.log(respuesta);
    // letraActual = 0;
    // vidas = 5;
    // resultado = [];
    // resultadoPantalla = '';
    location.reload();
}