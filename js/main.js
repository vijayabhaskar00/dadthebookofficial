$(document).ready(function () {
    "use strict";
/* ---------------------------------------------------------------------- */
// Pre Loader - Start
/* ---------------------------------------------------------------------- */
// Initialize functions after elements are loaded.
    $(window).load(function() {
        // Preloader
        $('.preloader img').fadeOut(); // will first fade out
        $('.preloader').delay(320).fadeOut('slow', function() {

        });
    });
/* ---------------------------------------------------------------------- */
// Pre Loader - Start
/* ---------------------------------------------------------------------- */


/* ---------------------------------------------------------------------- */
// Header Nav - Start
/* ---------------------------------------------------------------------- */
    if ($(window).scrollTop() > 10) {
        $('nav').addClass('shrink-nav');
    } else {
        $('nav').removeClass('shrink-nav');
    }
    $(window).scroll(function () {
    if ($(window).scrollTop() > 10) {
        $('nav').addClass('shrink-nav');
    } else {
        $('nav').removeClass('shrink-nav');
    }
    });
    function SetResizeHeaderMenu() {
        var width = $('nav.navbar').children('div.container').width();
    }
/* ---------------------------------------------------------------------- */
// Header Nav - End
/* ---------------------------------------------------------------------- */


/* ---------------------------------------------------------------------- */
// Parallax Settings for Hero Image - Start
/* ---------------------------------------------------------------------- */
    SetParallax();
    $('.fixed-parallax').each(function () {
        if ($(this).children('.parallax-hero-img').length) {
            var imgSrc = jQuery(this).children('.parallax-hero-img').attr('src');
            jQuery(this).css('background', 'url("' + imgSrc + '")');
            jQuery(this).children('.parallax-hero-img').remove();
            $(this).css('background-position', '50% 0%');
        }
    });
    var IsParallaxGenerated = false;
    function SetParallax() {
    if ($(window).width() > 1030 && !IsParallaxGenerated) {
        $('.parallax').parallax("50%", 0.4);
        IsParallaxGenerated = true;
        }
    }
/* ---------------------------------------------------------------------- */
// Parallax Settings for Hero Image - End
/* ---------------------------------------------------------------------- */


/* ---------------------------------------------------------------------- */
// Smooth Scrolling Animation - Start
/* ---------------------------------------------------------------------- */
var scrollAnimationTime = 1100,
        scrollAnimation = 'easeInOutExpo';
$('a.scrollto').bind('click.smoothscroll', function (event) {
    event.preventDefault();
    var target = this.hash;
    $('html, body').stop()
            .animate({
                'scrollTop': $(target)
                        .offset()
                        .top
            }, scrollAnimationTime, scrollAnimation, function () {
                window.location.hash = target;
            });
});
/* ---------------------------------------------------------------------- */
// Smooth Scrolling Animation - End
/* ---------------------------------------------------------------------- */


/* ---------------------------------------------------------------------- */
//Scroll To Top - Start
/* ---------------------------------------------------------------------- */
$(window).scroll(function () {
    if ($(this)
            .scrollTop() > 100) {
        $('.scrollTop')
                .fadeIn();
    } else {
        $('.scrollTop')
                .fadeOut();
    }
});
$('.scrollTop').click(function () {
    $('html, body').animate({
        scrollTop: 0
    }, 1000);
    return false;
});
/* ---------------------------------------------------------------------- */
//Scroll To Top - End
/* ---------------------------------------------------------------------- */


/* ---------------------------------------------------------------------- */
// Internal Links  - Start
/* ---------------------------------------------------------------------- */
$('.internal-link').smoothScroll({
    speed: 700,
    offset: -0
});
/* ---------------------------------------------------------------------- */
// Internal Links  - end
/* ---------------------------------------------------------------------- */


/* ---------------------------------------------------------------------- */
// Counter Settings - Start
/* ---------------------------------------------------------------------- */
    animatecounters();
    //starts counting on scroll
    $('.counter-timing').appear();
    $(document.body).on('appear', '.counter-timing', function (e) {
        if (!$(this).hasClass('appear')) {
            animatecounters();
            $(this).addClass('appear');
        }
    });
    function animatecounters() {
    $('.counter-timing').each(count);
        function count(options) {
            var $this = $(this);
            options = $.extend({}, options || {}, $this.data('countToOptions') || {});
            $this.countTo(options);
        }
    }
/* ---------------------------------------------------------------------- */
// Counter Settings - End
/* ---------------------------------------------------------------------- */


/* ---------------------------------------------------------------------- */
// WOW Animations  - Start
/* ---------------------------------------------------------------------- */
    var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 90,
        mobile: false,
        live: true
    });
    wow.init();
/* ---------------------------------------------------------------------- */
// WOW Animations  - End
/* ---------------------------------------------------------------------- */

/* ---------------------------------------------------------------------- */
//Full Screen Header - Start
/* ---------------------------------------------------------------------- */
    SetResizeHeaderMenu();
    $(window).resize(function () {
        SetResizeContent();
        setTimeout(function () {
            SetParallax();
        }, 1000);
    });
    function SetResizeContent() {
        var minheight = $(window).height();
        $(".full-screen").css('min-height', minheight);
        var minwidth = $(window).width();
        $(".full-screen-width").css('min-width', minwidth);
    }
    SetResizeContent();
/* ---------------------------------------------------------------------- */
//Full Screen Header - End
/* ---------------------------------------------------------------------- */


/* ---------------------------------------------------------------------- */
// Accordion Settings for mobile and iPads  - Start
/* ---------------------------------------------------------------------- */
    $('.nav.navbar-nav a.internal-link').on('click', function () {
        $(this).parents('ul.navbar-nav').find('a.internal-link').removeClass('active');
        $(this).addClass('active');
        if ($('.navbar-header .navbar-toggle').is(':visible'))
            $(this).parents('.navbar-collapse').collapse('hide');
    });
/* ---------------------------------------------------------------------- */
// Accordion Settings for mobile and iPads - End
/* ---------------------------------------------------------------------- */


/* ---------------------------------------------------------------------- */
//FORM TO EMAIL - Start
/* ---------------------------------------------------------------------- */
    $("#alert").hide();
    $("#contact-us-btn").click(function () {
        var error = validationContactUsForm();
        if (error) {
            $.ajax({
                type: "POST",
                url: "contactusform.php",
                data: $("#contactusform").serialize(),
                success: function (result) {
                    $('input[type=text],textarea').each(function () {
                        $(this).val('');
                    })
                    $("#alert").html(result);
                    $("#alert").fadeIn("slow");
                    $('#alert').delay(3000).fadeOut("slow");
                }
            });
        }
    });
    function validationContactUsForm() {
        var error = true;
        $('#contactusform input[type=text]').each(function (index) {

            if (index == 1) {
                if (!(/(.+)@(.+){2,}\.(.+){2,}/.test($(this).val()))) {
                    $("#contactusform").find("input:eq(" + index + ")").css({"border": "1px solid #d6d5d5"});
                    error = false;
                } else {
                    $("#contactusform").find("input:eq(" + index + ")").css({"border": "1px solid #d9d8d8"});
                }
            }
            else if (index == 0) {
                if ($(this).val() == null || $(this).val() == "") {
                    $("#contactusform").find("input:eq(" + index + ")").css({"border": "1px solid #d6d5d5"});
                    error = false;
                }
                else {
                    $("#contactusform").find("input:eq(" + index + ")").css({"border": "1px solid #d9d8d8"});
                }
            }
        });
        return error;
    }
});
/* ---------------------------------------------------------------------- */
// Contact Form - End
/* ---------------------------------------------------------------------- */
