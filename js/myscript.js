

function toogle(x) {
    x.classList.toggle("fa-times");
}

$('body').scrollspy({
    target: '.navbar',
    offset: 160
});



//scroll  navbar

$('.nav-link, .down-button').click(function () {
    var sectionTo = $(this).attr('href');
    $("html, body").animate({
        scrollTop: $(sectionTo).offset().top - 10
    }, 1500, 'easeInOutExpo');


});


//navbar effect
$(document).ready(function () {
    $(window).on('scroll', function () {
        if ($(window).scrollTop()) {
            $("header").addClass('bgc');
        } else {
            $("header").removeClass('bgc');
        }
    });

});


//init typed.js

let typed = new Typed('.animate', {
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



//open modal on submit

$('#myForm').on('submit', function (e) {
    e.preventDefault();
    $('#myModal').modal('show');
    $('#myForm')[0].reset();

});




wow = new WOW({
    boxClass: 'wow', // default
    animateClass: 'animated',
    offset: 0,

    callback: function (box) {
        // console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
    }
});


wow.init();



