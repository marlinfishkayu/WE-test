(function () {
	$('.menu-btn').on('click', function() {
		$('.menu-btn').toggleClass('open');
	})
})();



/*-- Scroll Up/Down add class --*/
// var lastScrollTop = 0;
// $(window).scroll(function(event){
//    var st = $(this).scrollTop();
//    if (st > lastScrollTop){
// 	   $('.nav-item').addClass('scrolling_down');
//        $('.nav-item').removeClass('scrolling_up');
//        $('.nav-wrap').removeClass("nav-fixed");
//    } else {
// 	   $('.nav-item').addClass('scrolling_up');
//        $('.nav-item').removeClass('scrolling_down');
//        $('.nav-wrap').addClass("nav-fixed")
//    }
//    lastScrollTop = st;
// });	

/*-- hover games menu --*/
// $(document).ready(function(){
//     $('.main-nav').mouseover(function(){
//         $('.is_hover').removeClass("is_hover");
//         $('.nav-item').addClass('scrolling_down');
//         $('.main-nav').addClass("is_hover");
//         $('.nav-wrap').addClass("nav-fixed")
//         console.log("is_hover")
//         return false;
//     });
//     $('.main-nav').mouseleave(function(){
//         $('.main-nav').removeClass("is_hover");
//         $('.nav-wrap').removeClass("nav-fixed");
//     });
//         });

/*--  hover games menu to open submenu --*/
// $('#gamesHover, .games-menu').hover(function() {
//     $('.games-menu').show();
// }, function() {
//     $('.games-menu').hide();
// });


//hover games menu bar

// $("#gamesHover").hover(
// function () {
//         $('.games-menu').addClass('games-hover');
//         $('#nav-area').removeClass('nav-scroll');
//         $('.nav-wrap').addClass('nav-black');
// }, 
// function () {
//     $('.games-menu').removeClass('games-hover');
// }
// );







//hide nav menu for search
$(document).ready(function(){
    $('.search').click(function(){
        $('.menu-item').addClass('hide-item')
        $('#searchForm').addClass('active')
        $('.closeBtn').addClass('active')
        $('.nav-wrap').addClass('search-black');
    })
    $('.closeBtn').click(function(){
        $('.menu-item').removeClass('hide-item')
        $('#searchForm').removeClass('active')
        $('.closeBtn').removeClass('active')
        $('.nav-wrap').removeClass('search-black')
    })

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