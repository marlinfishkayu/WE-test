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
// $(".menu-lang").hover(
//   function () {
//       $('#languageDropdown').addClass('lang-show');
//       $('.nav-wrap').addClass("lang_hover");
//   }, 
//   function () {
//       $('#languageDropdown').removeClass('lang-show');
//       $('.nav-wrap').removeClass("lang_hover");
//   }
// );
/*-- hover display language menu --*/

$(document).ready(function(){
  $('.menu-lang').mouseover(function(){
    // $("#nav-area").css('height', '500px');
    $('.nav-wrap').addClass("pointer");
      return false;
  });
  $('.menu-lang').mouseleave(function(){
      // $("#nav-area").css('height', '70px');
      $('.game-menu').removeClass('show');
        $('.nav-wrap').removeClass("pointer");
  });
});
// $(document).ready(function(){
//   $('#languageDropdown').mouseover(function(){
//       $('#languageDropdown').addClass("show");
//       return false;
//   });
//   $('#languageDropdown').mouseleave(function(){
//       $('#languageDropdown').removeClass("show");
//   });
// });


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


//selcet form 
$('select').on('change', function() {
  if ($(this).val()) {
return $(this).css('color', '#fff');
  } else {
return $(this).css('color', '#434343');
  }
});

