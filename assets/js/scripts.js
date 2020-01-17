function showImages(el) {
    var windowHeight = jQuery(window).height();
    $(el).each(function(){
        var thisPos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if(topOfWindow + windowHeight - 50 > thisPos) {
            $(this).addClass('fadeIn');
        } else {
            $(this).removeClass('fadeIn');
        }
    });
}

function scaleImages(el) {
    var windowHeight = jQuery(window).height();
    $(el).each(function(){
        var thisPos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if(topOfWindow + windowHeight - 200 > thisPos) {
            $(this).addClass('scaleIn');
        }
    });
}

function resetImageFades() {
    $(".fadeIn-image").removeClass("fadeIn");
    showImages('.fadeIn-image');
}

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function stickyNav() {
    if(window.pageYOffset >= sticky) {
        $("#navbar").addClass("sticky");
        $("#container").addClass("sticky-content");
    } else {
        $("#navbar").removeClass("sticky");
        $("#container").removeClass("sticky-content");
    }
}

$(document).ready(function(){
    showImages('.fadeIn-image');
    scaleImages('.scaleIn-image');
    stickyNav();
});

$(window).scroll(function() {
    showImages('.fadeIn-image');
    scaleImages('.scaleIn-image');
    stickyNav();
});

$(window).on('resize', function() {
    showImages('.fadeIn-image');
    scaleImages('.scaleIn-image');
    stickyNav();
});

$("#show-order-status").on('click', function() {
    $("#order-status").show();
});