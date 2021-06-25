$(function() {

    $('body').scrollspy({
        target: '.navbar',
        offset: 160
    });



    //shrink function for navbar

    $('.nav-link, .down-button').click(function() {
        var sectionTo = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(sectionTo).offset().top - 10
        }, 1500, 'easeInOutExpo');
    });


    //init typed.js

    var typed = new Typed('.animate', {
        strings: [
            "am a web developer.",
            " work with " + "HTML",
            " work with " + "CSS",
            " work with " + "JAVASCRIPT"
        ],
        // smartBackspace: true,
        typeSpeed: 60,
        backSpeed: 50,
        loop: true,
        backDelay: 2000
    });






    //init aos
    AOS.init();



    //agregando skills section
    // window.addEventListener('load', () => {
    //     // Ejecuta manualmente el evento de click de tu elemento
    //     elem.cargar();
    // })
    // document.getElementByClass('myBar').addEventListener(cargar(), false);

    // function cargar() {

    //     var i = 0;
    //     // alert("Hello! I am an alert box!");
    //     if (i == 0) {
    //         i = 1;
    //         var elem = document.getElementByClass('myBar');
    //         var width = 1;
    //         var id = setInterval(frame, 18);

    //         function frame() {
    //             if (width >= 80) {
    //                 clearInterval(id);
    //                 i = 0;
    //             } else {
    //                 width++;
    //                 elem.style.width = width + "%";
    //             }
    //         }
    //     }
    // }



});


wow = new WOW({
    boxClass: 'wow', // default
    animateClass: 'animated',
    offset: 0,

    callback: function(box) {
        // console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
    }
});
wow.init();