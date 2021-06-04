var animals = [{
    name: "CAT",
    image: "images/cat.jpg"
}, {
    name: "DOG",
    image: "images/perro.jpg"
}, {
    name: "BEAR",
    image: "images/oso.jpg"
}, {
    name: "PIG",
    image: "images/cerdo.jpg"
}, {
    name: "HORSE",
    image: "images/horse.jpg"
}];

// const words = ["CAT", "DOG", "CAR", "BEAR", "SHARK"]

var selectedword = animals[Math.floor(Math.random() * animals.length)];

//var imagen = selectedword.image;

// document.getElementById("myImg").innerHTML


// ima.innerHTML = `  
// ${selectedword.image  }`;
//document.getElementById("myImg").innerHTML = "<img src='" + imagen + "'>";

const popup = document.getElementById('popup-container');

const finalMessage = document.getElementById('final-message');


//console.log(selectedword);

var respuesta = selectedword.name;
console.log(respuesta);
document.getElementById("myImg").src = selectedword.image;

//obteniendo el id de cuadro 1
var cuadro = document.getElementById('cuadro1');


// Variables para respuestas
let letraActual = 0;
let vidas = 3;
let resultado = [];
let resultadoPantalla = '';
// let vidasPantalla = '';

function verificar(letra) {

    if (letra === respuesta[letraActual]) {
        resultado.push(letra);
        console.log("Perfect!");
        resultadoPantalla += resultado[letraActual];
        console.log("Answer: " + resultado);
        letraActual++;

        // codigo para remover lista y desaparecer el cuadro

        if (letraActual >= 2) {
            cuadro.classList.remove("cuadros");
            cuadro.classList.add("cuadroTransparente");

        }


        if (letraActual === respuesta.length) {
            console.log("You win!");
            // document.getElementById('mensajitowin').style.display = 'block';
            //  reiniciar();
            finalMessage.innerText = 'Congratulations! You won! 😃';
            popup.style.display = 'flex';
        }
    } else {
        vidas--;
        console.log(letra + " is not the letter we're looking for...");
        console.log("Remaining lives: " + vidas);


        if (vidas === 0) {
            console.log("You lose! Sorry");
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