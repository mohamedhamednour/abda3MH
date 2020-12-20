$(document).ready(function(){
    $(".services-carousel").owlCarousel({
        loop:true,
        rtl:true,
        nav:true,
        margin:20,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true,     
            },
            600:{
                items:2,
                nav:false,     
            },
            1000:{
                items:3,
                nav:true,
                loop:true,  
            }
             
        }
        
    });
  });

  $(document).ready(function(){
    $(".proud-carousel").owlCarousel({
        loop:true,
        rtl:true,
        nav:true,
        margin:20,
        responsiveClass:true,
        responsive:{
            0:{
                items:2,
                nav:true,     
            },
            600:{
                items:3,
                nav:true,     
            },
            1000:{
                items:4,
                nav:true,
                loop:true,  
            }
             
        }
        
    });
  });


 