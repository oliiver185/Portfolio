/*to change the menu button*/

function myFunction(x) {
    x.classList.toggle("fa-times-circle");
}

//getting songs

obtenerCanciones();


//slider landing page

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

    setTimeout(showSlides, 5000); // Change image every 2 seconds


}





/*slider section*/


let slider = document.querySelector('.slider-contenedor');
let sliderIndividual = document.querySelectorAll('.contenido-slider');
let contador = 1;
let width = sliderIndividual[0].clientWidth;
let intervalo = 10000;

// const discography = document.getElementById('slides');

// discography.addEventListener('scroll', slides);

window.addEventListener("resize", function() {
    width = sliderIndividual[0].clientWidth;
});


setInterval(function() {
    slides();
}, intervalo);


function slides() {
    slider.style.transform = "translate(" + (-width * contador) + "px)";

    slider.style.transition = "transform .5s ";



    contador++;


    if (contador === sliderIndividual.length) {
        setTimeout(function() {
            slider.style.transform = "translate(0px)";
            slider.style.transition = "transform 0s";
            contador = 1;
        }, 1500);
    }
}

/*aqui terina la seccion para el slider*/








// var currentSong = document.getElementById("ukuleleMusic");
// var currentControls = document.getElementById("ukuleleControls");

function play(controls, musica) {

    // currentSong.pause();
    // currentControls.querySelector('i.fas').classList.add('fa-play');
    // currentControls.querySelector('i.fas').classList.remove('fa-pause');
    const reproducir = document.getElementById(controls); /*play*/
    var music = document.getElementById(musica); /*audio*/
    // currentSong = music;
    // currentControls = reproducir;


    if (music.paused) {
        music.play();
        reproducir.querySelector('i.fas').classList.remove('fa-play');
        reproducir.querySelector('i.fas').classList.add('fa-pause');

        music.currentTime = 0;
        duration = setInterval(function() {

            // console.log(music.currentTime, "/", music.duration);
            if (music.currentTime >= music.duration) {
                clearInterval(duration);
                reproducir.querySelector('i.fas').classList.add('fa-play');
                reproducir.querySelector('i.fas').classList.remove('fa-pause');

            }
        }, 1000);


    } else {
        music.pause();
        clearInterval(duration);
        music.currentTime = 0;
        reproducir.querySelector('i.fas').classList.add('fa-play');
        reproducir.querySelector('i.fas').classList.remove('fa-pause');
    }




};

function pauseEverySong() {
    console.log("pausando");
}



function obtenerCanciones() {

    var canciones = [{
            id: "ukelele",
            title: "JUST ONE THING",
            sub_title: "TCMI",
            source: "music/justOneThing.mp3",
            music: "justOnething",
            controls: "justonethingcontrols"
        },
        {
            id: "time",
            title: "TIME",
            sub_title: "TCMI",
            source: "music/Time.m4a",
            music: "heyMusic",
            controls: "heyControls"

        },
        {
            id: "summer",
            title: "WRITTEN IN THE STARS",
            sub_title: "TCMI",
            source: "music/Written in the stars.m4a",
            music: "summerMusic",
            controls: "summerControls"
        }, {
            id: "hey",
            title: "HEY",
            sub_title: "TCMI",
            source: "music/ukulele.mp3",
            music: "song5",
            controls: "song5controls"
        },
        {
            id: "summer",
            title: "SUMMER",
            sub_title: "TCMI",
            source: "music/hey.mp3",
            music: "heyMusi",
            controls: "heyContr"

        },
        {
            id: "flowers",
            title: "FLOWERS",
            sub_title: "TCMI",
            source: "music/summer.mp3",
            music: "summerMu",
            controls: "summerCont"
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
            "<div class=\"nombre-cancion\"><h5>" + canciones[i].title + "</h5><p>TCMI</p></div></section>" +
            "<a href=\"" + canciones[i].source + "\" download class=\"descargar\"><h5 class=\"descargar-title\">DOWNLOAD</h5><i class=\"fas fa-download\"></i></a></li>";
    }

    misCanciones.innerHTML = salidaListado;



}




/*countdown */

const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const countdown = document.getElementById('countdown');

const currentYear = new Date().getFullYear();
const newYearTime = new Date(`August 28 ${currentYear} 00:00:00`);


// Update countdown time
function updateCountdown() {
    const currentTime = new Date();
    const diff = newYearTime - currentTime;

    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;

    // Add values to DOM
    days.innerHTML = d;
    hours.innerHTML = h < 10 ? '0' + h : h;
    minutes.innerHTML = m < 10 ? '0' + m : m;
    seconds.innerHTML = s < 10 ? '0' + s : s;
}


// Run every second
setInterval(updateCountdown, 1000);



//grid 
const btnall = document.getElementById('btn-all');
const btnimages = document.getElementById('btn-images');
const btnvideo = document.getElementById('btn-videos');

const gallery1 = document.getElementById("gallery-1");
const gallery2 = document.getElementById("gallery-2");
const gallery3 = document.getElementById("gallery-3");
const gallery4 = document.getElementById("gallery-4");
const gallery5 = document.getElementById("gallery-5");
const gallery6 = document.getElementById("gallery-6");


// Full-width images
function btnAll() {

    gallery1.style.opacity = "";
    gallery3.style.opacity = "";
    gallery5.style.opacity = "";

    gallery2.style.opacity = "";
    gallery4.style.opacity = "";
    gallery6.style.opacity = "";


    btnall.classList.add('active');
    btnimages.classList.remove('active');
    btnvideo.classList.remove('active');



}

function btnImages() {
    btnAll();
    // gallery1.style.borderColor = "yellow";

    gallery1.style.opacity = "";
    gallery2.style.opacity = "";
    gallery3.style.opacity = "";
    gallery4.style.opacity = "0.2";
    gallery5.style.opacity = "";
    gallery6.style.opacity = "";



    btnall.classList.remove('active');
    btnvideo.classList.remove('active');
    btnimages.classList.add('active');
}

function btnVideos() {
    btnAll();

    gallery1.style.opacity = "0.2";
    gallery2.style.opacity = "0.2";
    gallery3.style.opacity = "0.2";
    gallery5.style.opacity = "0.2";
    gallery6.style.opacity = "0.2";


    btnall.classList.remove('active');
    btnimages.classList.remove('active');
    btnvideo.classList.add('active');



}


//modal images

const images = document.querySelectorAll(".images img");
const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modalImg");
const modalTxt = document.querySelector(".modalTxt");
const close = document.querySelector(".close");

images.forEach((image) => {
    image.addEventListener("click", () => {
        modalImg.src = image.src;
        modalTxt.innerHTML = image.alt;
        modal.classList.add("appear");

        close.addEventListener("click", () => {
            modal.classList.remove("appear");
        });
    });
});





function toggle() {


    var trailer = document.querySelector(".trailer");
    var video = document.querySelector(".video");


    trailer.classList.toggle("active")
    video.pause();
    video.currentTime = 0;
    video.autoplay = "true";
    video.load();


}



function toogleClose() {
    var trailer = document.querySelector(".trailer");
    var video = document.querySelector(".video");

    trailer.classList.toggle("active")
    video.pause();
    video.currentTime = 0;


}