// Initialize Wow
$( document ).ready(function() {
  new WOW().init()
});
//Read slider
// $(document).ready(function(){

//   $('.demo').slick({
//     slidesToShow: 3,
//     slidesToScroll: 1,
  
// });
  // $('.read__slider').slick(
  // //   {
  // //   infinite: true,
  // //   slidesToShow: 3,
  // //   slidesToScroll: 3,
  // // }
  // );
// });



$(window).scroll(function() {
  var scrollTop = $(this).scrollTop();

  $('.get-started-btn').css({
    opacity: function() {
      var elementHeight = $(this).height();
      opacity = ((1 - (elementHeight - scrollTop) / elementHeight) * 1) ;
    return opacity;
    }
  });
});


// $(window).scroll(function(){
//   var st = $(window).scrolldown();
//   var range = 300 // finetune this to the desired effect
//   $('.get-started-btn').css("opacity", 1 - st / range); // animate your element
// });
$(document).ready(function(){
  $('.center-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    arrows: true,
    dots: false,
    speed: 300,
    //  centerPadding: '30px',
    infinite: true,
    autoplaySpeed: 5000,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
             centerMode:true, 
               
        }
      },
      
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: '100px',
        }
      
        
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
            
          centerMode: true,
          
        }
        
      
        
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
            
          centerMode: true,
          
        }
        
      
        
      }

      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]

  });
});


// navbar content

document.addEventListener("DOMContentLoaded", function(){
  // make it as accordion for smaller screens
  if (window.innerWidth > 992) {
  
      document.querySelectorAll('.navbar .nav-item').forEach(function(everyitem){
  
          everyitem.addEventListener('mouseover', function(e){
  
              let el_link = this.querySelector('a[data-bs-toggle]');
  
              if(el_link != null){
                  let nextEl = el_link.nextElementSibling;
                  el_link.classList.add('show');
                  nextEl.classList.add('show');
              }
  
          });
          everyitem.addEventListener('mouseleave', function(e){
              let el_link = this.querySelector('a[data-bs-toggle]');
  
              if(el_link != null){
                  let nextEl = el_link.nextElementSibling;
                  el_link.classList.remove('show');
                  nextEl.classList.remove('show');
              }
  
  
          })
      });
  
  }
  // end if innerWidth
  }); 


  const menu = document.querySelector(".menu");
  const menuOpen = document.querySelector(".menu-open");
  const navLinks = document.querySelector(".nav-link");
  const links = document.querySelector(".nav-link li");
  const banner = document.querySelector(".banner");

  menu.addEventListener('click', ()=>{
    navLinks.classList.toggle("open");
    menu.classList.toggle("menu-open");
    banner.classList.toggle("fade");

    links.forEach(link=>{
      link.classList.toggle("fade");
    })
  })

  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }






let $root = $('html, body');
      // $('a[href^="#"]').click(function() {
      //     let href = $.attr(this, 'href');
      //     $root.animate({
      //       scrollTop: $(href).offset().top
      //     }, 500, function() {
      //       window.location.hash = href;
      //     });
      //     return false;
      //   });


  if(window.location.hash){

    let hash =window.location.hash;
    if($(hash).length){
      $root.animate({
        scrollTop: $(href).offset().top
      }, 500)
    }

  }



  (function(){

    var doc = document.documentElement;
    var w = window;
  
    var prevScroll = w.scrollY || doc.scrollTop;
    var curScroll;
    var direction = 0;
    var prevDirection = 0;
  
    var header = document.getElementById('site-header');
  
    var checkScroll = function() {
  
      /*
      ** Find the direction of scroll
      ** 0 - initial, 1 - up, 2 - down
      */
  
      curScroll = w.scrollY || doc.scrollTop;
      if (curScroll > prevScroll) { 
        //scrolled up
        direction = 2;
      }
      else if (curScroll < prevScroll) { 
        //scrolled down
        direction = 1;
      }
  
      if (direction !== prevDirection) {
        toggleHeader(direction, curScroll);
      }
      
      prevScroll = curScroll;
    };
  
    var toggleHeader = function(direction, curScroll) {
      if (direction === 2 && curScroll > 52) { 
        
        //replace 52 with the height of your header in px
  
        header.classList.add('hide');
        prevDirection = direction;
      }
      else if (direction === 1) {
        header.classList.remove('hide');
        prevDirection = direction;
      }
    };
    
    window.addEventListener('scroll', checkScroll);
  
  })();
    