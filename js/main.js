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
        $('.nav-wrap').removeClass("nav-fixed");
        console.log("running")
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
$(".game-icon-wrap").hover(
    function () {
        $(this).addClass('hover');
    }, 
    function () {
        $(this).removeClass('hover');
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

/*-- hover language menu arrow icon --*/

  $('.language-tap').mouseover(function(){
      $('.language-tap').removeClass("active");
      $(this).addClass("active");
      return false;
  });
  $('.language-tap').mouseleave(function(){
      $(this).removeClass("active");
  });



/*-- hover display language menu --*/

$('.menu-lang').click(function(){
    $('.lang-dropdown').toggleClass("show");
    $('.game-show').addClass("show");
    $('.nav-wrap').addClass("pointer");
        return false;
})
$(document).on("click", function(event){
   $('.lang-dropdown').removeClass("show");
});

/*-- hover index our games diamond --*/

$('.our-gamaes-column').mouseover(function(){
  $('.our-gamaes-column').removeClass("active");
  $(this).addClass('active');
  return false;
});
$('.our-gamaes-column').mouseleave(function(){
  $(this).removeClass("active");
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
	loop:false,
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

$('#diamondCarousel').on('initialized.owl.carousel changed.owl.carousel', function(e) {
    if (!e.namespace)  {
      return;
    }
    var carousel = e.relatedTarget;
    $('.dia-pagedot-counter').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);
  }).owlCarousel({
    center: false,
    items:1,
    loop: false,
    margin:10,
    autoplay: false,
    autoplayTimeout:2000,
    responsive: {
        0: {
            center: true,
          items: 1,
          navigation: true,
          nav: true,
          slideBy: 1 // <!-- HERE
        },
       768: {
          items: 3,
          navigation: true,
          nav: true,
          slideBy: 3 // <!-- HERE
        }
      },
      scrollPerPage: true,
      navigation: true
  });

/*--  tilt.js for diamond carousal --*/
$(document).ready(function(){
    $('.diamond-wrap').tilt({
        maxTilt: 10,
        easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
        transition: true,   // Set a transition on enter/exit.
        glare: false,  // Enables glare effect
        gyroscopeMaxAngleY:  5,
       
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




/*-- All Live Game popular game slider--*/
$('#popularCarousel').owlCarousel({
    loop: true,
    lazyLoad: true,
    // margin:10,
    nav:true,
    autoWidth:true,
    items:1,    
    nav: true,
    lazyLoadEager:4,
    autoplayHoverPause:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive: {
      0: {
          center: true,
        items: 1,
        navigation: true,
        nav: true,
        slideBy: 1 // <!-- HERE
      },
     768: {
        items: 1,
        navigation: true,
        nav: true,
        slideBy: 1 // <!-- HERE
      }
    },
    scrollPerPage: true,
    navigation: true
})

/*-- All Live Game new release game slider--*/

$('#newReleaseCarousel').owlCarousel({
    loop: true,
    lazyLoad: true,
    // margin:10,
    nav:true,
    autoplay: false,
    autoWidth:true,
    items:1,    
    nav: true,
    lazyLoadEager:4,
    autoplayHoverPause:true,
    responsive: {
      0: {
        center: true,
        items: 1,
        navigation: true,
        nav: true,
        slideBy: 1 // <!-- HERE
      },
     768: {
        items: 3,
        navigation: true,
        autoWidth:true,
        nav: true,
        slideBy: 3 // <!-- HERE
      }
    },
    scrollPerPage: true,
    navigation: true
})

/*-- Add class to popular-game-carousel slider when hover --*/
$(document).ready(function(){
    $(".pg-slide").hover(
        function () {
            $(this).toggleClass('hovering');
        });
    });
    
/*-- Add class to about content list --*/
$('.about-list-wrap a').click(function(){
    $('.about-list-wrap a').removeClass('selected');
    $(this).addClass('selected');
 });

/*-- Add class to about content list --*/
$('#Event-slider').owlCarousel({
    loop:true,
    nav:true,
    item:1,
    center:true,
    margin:30,
    responsive: {
        0: {
          items: 1,
          navigation: true,
          nav: true,
          slideBy: 1 // <!-- HERE
        },
       768: {
        items: 1,
        navigation: true,
        nav: true,
        slideBy: 1 // <!-- HEREE
        }
      },
      scrollPerPage: true,
      navigation: true
})

// event slider

$(function(){
    var owl = $('#EventSlider');
    owl.owlCarousel({
      items:1,
      loop: false,
      responsive: {
        0: {
          items: 1,
          navigation: true,
          nav: true,
          slideBy: 1 // <!-- HERE
        },
       768: {
        items: 1,
        navigation: true,
        nav: true,
        slideBy: 1 // <!-- HEREE
        }
      },
      scrollPerPage: true,
      navigation: true,
      onInitialized  : counter, //When the plugin has initialized.
      onTranslated : counter //When the translation of the stage has finished.
    });
    
    function counter(event) {
       var element   = event.target;         // DOM element, in this example .owl-carousel
        var items     = event.item.count;     // Number of items
        var item      = event.item.index + 1;     // Position of the current item
      
      // it loop is true then reset counter from 1
      if(item > items) {
        item = item - items
      }
      $('#evnet-page').html(item+" / "+items)
    }
    });

 /*-- Number counting animation --*/
// const counters = document.querySelectorAll('.counter');
// const speed = 500;

// counters.forEach(counter =>{
//   const updateCount = () =>{
//     const target = +counter.getAttribute('data-target');
//     const count = +counter.innerText;

//     const inc = target / speed;

//     if(count < target){
//       counter.innerText = Math.ceil(count + inc);
//       setTimeout(updateCount,1);
//     } else{
//       count.innerText = target;
//     }
//   }

//   updateCount();
// })

 /*-- studioCarousel --*/
 
$('#studioCarousel').owlCarousel({
  loop:false,
  margin:10,
  center: true,
  responsive:{
      0:{
        items:2,
        center: true,
        nav:false,
        slideBy: 1 // <!-- HERE
      },
      600:{
        items:3,
        center: true,
        nav:false,
        slideBy: 1 // <!-- HERE
      },
      1000:{
        center: false,
        items:5,
        navigation : false,
        nav:false,
        autoWidth:true,
        slideBy: 1 // <!-- HERE
      }
  }
});


/*--  show less button --*/

(function () {
	$(".showless_btn").on('click', function() {
		$(this).toggleClass("active");
		$(".showless-wrap").toggleClass('open');
	})
})();



/*--  cookie popup --*/
const cookieContainer = document.querySelector(".cookie-container");
const cookieButton = document.querySelector(".cookie-btn");


cookieButton.addEventListener("click", () => {
  cookieContainer.classList.remove("active");
  localStorage.setItem("cookieBannerDisplayed", "true");
});

setTimeout(() => {
  if (!localStorage.getItem("cookieBannerDisplayed")) {
    cookieContainer.classList.add("active");
  }
}, 1000);


/*-- Add live game column when hover in All Live Game page --*/


  $(document).ready(function(){
    $(".game-item-wrap").mouseover(function(){
      $(".game-item-wrap").removeClass('hovering');
      $(this).addClass("hovering");
        return false;
    });
    $(".game-item-wrap").mouseleave(function(){
      $(".game-item-wrap").removeClass('hovering');
    });
  });
  


/*-- Thank you for subscribe popup  --*/


$('#signUp').click(function(){
  $('#thankyou-popup').addClass("show");
  })
  $('.thanyou-close-btn').click(function(){
    $('#thankyou-popup').removeClass("show");
  })
  $('.thanyou-close-btn').click(function(){
    $('#thankyou-popup').removeClass("show");
  }

);