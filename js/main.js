(function () {
	$('.menu-btn').on('click', function() {
		$('.menu-btn').toggleClass('open');
		$('.sidebar').toggleClass('open');
	})
})();

/*--  Hide Header on on scroll down --*/

var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.nav-item').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('.nav-item').removeClass('show').addClass('hidden');
        $('.nav-wrap').removeClass("nav-fixed")
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('.nav-item').removeClass('hidden').addClass('show');
            $('.nav-wrap').addClass("nav-fixed")
        }
    }
    
    lastScrollTop = st;
}


/*-- hover games menu --*/
$(document).ready(function(){
    $('.main-nav').mouseover(function(){
        $('.is_hover').removeClass("is_hover");
        $('.main-nav').addClass("is_hover");
        $('.nav-wrap').addClass("nav-fixed");
        return false;
    });
    $('.main-nav').mouseleave(function(){
        $('.main-nav').removeClass("is_hover");
        $('.nav-wrap').removeClass("nav-fixed");
    });
 });


//hover games menu bar

$("#gamesHover").hover(
    function () {
        $('.game-menu').addClass('show');
        $('.nav-wrap').addClass("pointer");

            
    }, 
    function () {
        $('.game-menu').removeClass('show');
        $('.nav-wrap').removeClass("pointer");
    }
);

/*-- side menu open sub menu --*/
$('.game-btn').click(function(){
    $('.game-show').toggleClass("show");
    $('.game-btn').toggleClass("rotate");
    
})
$('.livegame-btn').click(function(){
    $('.livegame-show').toggleClass("show");
    $('.livegame-btn').toggleClass("rotate");
});



// diamond slider effect
$(document).ready(function(){
$(".diamond-item").hover(
    function () {
        $(this).addClass('hovering');
    }, 
    function () {
        $(this).removeClass("hovering");
    });
});

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
$('.news-slider').on('initialized.owl.carousel changed.owl.carousel', function(e) {
    if (!e.namespace)  {
      return;
    }
    var carousel = e.relatedTarget;
    $('.pagedot-counter').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);
  }).owlCarousel({
    center: true,
    loop: false,
    margin: 20,
    items: 2,
    responsive: {
      0: {
        items: 1,
        navigation: true,
        nav: true,
        slideBy: 1 // <!-- HERE
      },
     1400: {
        items: 2,
        navigation: true,
        nav: true,
        slideBy: 2 // <!-- HERE
      },
    2100: {
        items: 3,
        navigation: true,
        nav: true,
        slideBy: 3 // <!-- HERE
      }
    },
    scrollPerPage: true,
    navigation: true
  });


/*--  Diamond carousal --*/
// $('#diamondCarousel').owlCarousel({
//     center: true,
//     items:1,
//     loop: true,
//     margin:10,
//     autoplay: false,
//     autoplayTimeout:2000,
//     // autoplayHoverPause:true,
//     responsive:{
//         300:{
//             navigation: true,
//             nav: true,
//             items:1
//         },
//         600:{
//             navigation: true,
//             nav: true,
//             items:3
//         },
//         1750:{
//             navigation: true,
//             nav: true,
//             items:4
//         }
//     }
// });
$('#diamondCarousel').on('initialized.owl.carousel changed.owl.carousel', function(e) {
    if (!e.namespace)  {
      return;
    }
    var carousel = e.relatedTarget;
    $('.dia-pagedot-counter').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);
  }).owlCarousel({
    center: true,
    items:1,
    loop: true,
    margin:10,
    autoplay: true,
    autoplayHoverPause:true,
    autoplayTimeout:2000,
    responsive:{
        300:{
            nav: true,
            items:1
        },
        600:{
            nav: true,
            items:3
        },
        1750:{
            nav: true,
            items:4
        }
    }
  });

/*--  tilt.js for diamond carousal --*/
$(document).ready(function(){
    $('.diamond-item').tilt({
        maxTilt: 20,
        easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
        transition: true,   // Set a transition on enter/exit.
        glare: false,  // Enables glare effect
        gyroscopeMaxAngleY:  35    
    })
})



/*--  live studio hover scale --*/

  //This function will fire every time the user mouses off of the image. It resets the translation back to 0.
  $(".img-hover").mouseout(function(){
    $(this).css("transform", "translate(0px,0px)");
  });

  $(".studio-card").hover(
    function () {
        $(this).addClass('hovering-slide');
    }, 
    function () {
        $(this).removeClass("hovering-slide");
    }
);


/*--  light slider --*/

// $('#StudioSlider').lightSlider({
//     gallery: true,
//     item: 1,
//     loop:true,
//     slideMargin: 0,
//     thumbItem: 10,
//     // onSliderLoad: function() {
//     //     $("img").addClass("preferredHeight");
//     //   },
//     responsive : [ 
//         {
//             breakpoint: 768,
//             settings: {
//                 thumbItem: 5,
//                 slideMove: 1 
//             }
//         }
//     ]
// });


/*-- All Live Game popular game slider--*/
$('#popularCarousel').owlCarousel({
    loop: true,
    lazyLoad: true,
    // margin:10,
    nav:true,
    autoplay: false,
    autoWidth:true,
    items:1,    
    nav: true,
    // autoplayHoverPause:true,
    responsive: {
      0: {
          center: true,
        items: 1,
        navigation: true,
        nav: true,
        slideBy: 1 // <!-- HERE
      },
     768: {
        items: 2,
        navigation: true,
        nav: true,
        slideBy: 2 // <!-- HERE
      },
     1280: {
        items: 3,
        navigation: true,
        nav: true,
        slideBy: 3 ,// <!-- HERE
        lazyLoadEager:3
      }
    },
    scrollPerPage: true,
    navigation: true
})
