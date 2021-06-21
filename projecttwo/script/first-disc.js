obtenerCanciones();







function play(controls, music) {

    const reproducir = document.getElementById(controls); /*play*/
    var music = document.getElementById(music); /*audio*/


    if (music.paused) {
        music.play();
        reproducir.querySelector('i.fas').classList.remove('fa-play');
        reproducir.querySelector('i.fas').classList.add('fa-pause');

    } else {
        music.pause();
        music.currentTime = 0;
        reproducir.querySelector('i.fas').classList.add('fa-play');
        reproducir.querySelector('i.fas').classList.remove('fa-pause');
    }

    if (music.ended) {
        reproducir.querySelector('i.fas').classList.add('fa-play');
        reproducir.querySelector('i.fas').classList.remove('fa-pause');
    }

};



function obtenerCanciones() {

    var canciones = [{
            id: "ukelele",
            title: "JUST ONE THING",
            sub_title: "Limitless",
            source: "music/justOneThing.mp3",
            music: "ukuleleMusic",
            controls: "ukuleleControls"
        },
        {
            id: "hey",
            title: "LOVE IS LIKE THAT",
            sub_title: "Limitless",
            source: "music/hey.mp3",
            music: "heyMusic",
            controls: "heyControls"

        },
        {
            id: "summer",
            title: "FLOWERS",
            sub_title: "Limitless",
            source: "music/summer.mp3",
            music: "summerMusic",
            controls: "summerControls"
        }, {
            id: "song4",
            title: "TIMER",
            sub_title: "Limitless",
            source: "music/ukulele.mp3",
            music: "song5",
            controls: "song5controls"
        },
        {
            id: "song5",
            title: "LOVE IS LIKE THAT",
            sub_title: "Limitless",
            source: "music/hey.mp3",
            music: "heyMusic",
            controls: "heyControls"

        },
        {
            id: "song6",
            title: "FLOWERS",
            sub_title: "Limitless",
            source: "music/summer.mp3",
            music: "summerMusic",
            controls: "summerControls"
        }

    ];
    const misCanciones = document.querySelector("#cancionero");
    var salidaListado = "";


    for (var i = 0; i < canciones.length; i++) {
        salidaListado += "<li class=\"lista-canciones\" id=\"" + canciones[i].id + "\">" +
            "<section class=\"cancion\">" +
            "<audio src=\"" + canciones[i].source + "\" id=\"" + canciones[i].music + "\">" +
            "</audio> <div id=\"" + canciones[i].controls + "\" class=\"reproducir\">" +
            "<button id=\"action-button\" onclick=\"play('" + canciones[i].controls + "','" + canciones[i].music + "')\"><i class=\"fas fa-play\"></i></button></div>" +
            "<div class=\"nombre-cancion\"><h5>" + canciones[i].title + "</h5><p>Limitless</p></div></section>" +
            "<a href=\"" + canciones[i].source + "\" download class=\"descargar\"><h5 class=\"descargar-title\">DOWNLOAD</h5><i class=\"fas fa-download\"></i></a></li>";
    }

    misCanciones.innerHTML = salidaListado;

    // for (var i = 0; i < canciones.length; i++) {


    //     var current = document.getElementById('action-button').attributes('onclick');

    //     current[i] = current[i].removeAttibute('onclick', '');
    //     this.current[i].addAttribute('onclick') += ('onclick')


    // current[0].className = current[0].className.replace(" active", "");
    // this.className += " active";


}

/*to change the menu button*/

function myFunction(x) {
    x.classList.toggle("fa-times-circle");
}


var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";

    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    setTimeout(showSlides, 6000); // Change image every 2 seconds

    // if (n > slides.length) { slideIndex = 1 }
    // if (n < 1) { slideIndex = slides.length }
}