$(document).ready( function() {

$('.carousel.carousel-slider').carousel({fullWidth: true});

$('.carousel').carousel();
 setInterval(function() {
   $('.carousel').carousel('next');
 }, 4500);



  $(".button-collapse").sideNav();

});
