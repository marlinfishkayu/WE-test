// (function () {
// 	$('.menu-wrapper').on('click', function() {
// 		$('.hamburger-menu').toggleClass('animate');
// 	})
// })();


//navbar scroll add class
$(window).on('scroll', function(){
    if($(window).scrollTop()){
        $('#nav-area').addClass('nav-scroll');
    }
    else{
        $('#nav-area').removeClass('nav-scroll');
    }
})



//Hero carousal
$('#slider-area').owlCarousel({
	loop:true,
	autoplay:true,
	margin:10,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

//with page indicator carousal
$('.slider').on('initialized.owl.carousel changed.owl.carousel', function(e) {
    if (!e.namespace)  {
      return;
    }
    var carousel = e.relatedTarget;
    $('.slider-counter').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);
  }).owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
  });