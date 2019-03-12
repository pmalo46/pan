// Parallax Background

$(function() {
    
    // Cache the window object
    var $window = $(window);
    
    // Parallax background effect
    $('section[data-type="background"]').each(function() {
        
        var $bgobj = $(this); //assigning the object
        
        $(window).scroll(function() {
            
            // scroll the background at var speed
            // the yPos is a negative value because we're scrolling it UP!
            
            var yPos = -($window.scrollTop() / $bgobj.data('speed'));
            
            // Put together our final background position
            var coords = '50% '+ yPos + 'px';
            
            // Move the background
            $bgobj.css({ backgroundPosition: coords });
            
        }); // end window scroll
        
    });
    
});



$(document).ready(function() {
    
    /* ---- SCROLL ON BUTTONS ---- */
    
    $('.js-scroll-to-about').click(function() {
        $('html, body').animate({scrollTop: ($('.js-section-about').offset().top)-1}, 1000);
    });
    
    $('.js-scroll-to-video').click(function() {
        $('html, body').animate({scrollTop: ($('.js-section-video').offset().top)-1}, 1000);
    });
    
    $('.js-scroll-to-subscribe').click(function() {
        $('html, body').animate({scrollTop: ($('.js-section-subscribe').offset().top)-1}, 1000);
    });
    
    /* ---- NAVIGATION SCROLL ---- */
    
    $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({scrollTop: (target.offset().top)-1}, 1000);
            return false;
          }
        }
      });
    });

});  