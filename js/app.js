$(document).ready(function(){
  $('.carousel').carousel();

  $('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
  });

  $('.moveNextCarousel').click(function(e){
    e.preventDefault();
    e.stopPropagation();
    $('.carousel').carousel('next');
 	});

 	// move prev carousel
 	$('.movePrevCarousel').click(function(e){
    e.preventDefault();
    e.stopPropagation();
    $('.carousel').carousel('prev');
 	});

 	$( "a.nav" ).click(function( event ) {
      event.preventDefault();
      $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500);
  });
});