'use strict';
$(function(){
    if($(window).scrollTop() >= 100){
        $("#main-nav").addClass('scroll');
    }

    //Zmiana tła i koloru linków w menu przy skrolowaniu
    $(window).scroll(function(){

        if($(window).scrollTop() >= 100){
            $("#main-nav").addClass('scroll');
        } else {
            $("#main-nav").removeClass('scroll');
        }

    });

    //Smooth Scroll - animacja przy skollowaniu strony
    var root = $('html, body');
    $('li>a[href*="#"]:not([href="#"])').click(function() {
        var href = $(this).attr('href');
        root.animate({
            scrollTop: $(href).offset().top - 50
        }, 500);
        return false;
    });
})
 
