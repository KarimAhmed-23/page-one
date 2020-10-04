$(document).ready(function () {
    
    
   $('.work-slider').slick({
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  rtl:true,
  prevArrow:'<span class="prev-arrows"><i class="fas fa-angle-right"></i></span>',
  nextArrow:'<span class="next-arrows"><i class="fas fa-angle-left"></i></span>',
        responsive: [
   
    {
      breakpoint: 357,
      settings: {
        dots:false
      }
    }
  
  ]
}); 
    
    
    
    
    
    
    
$('.partenter-slider').slick({
  dots: false,
  infinite: false,
  accessibility: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  rtl:true,
  prevArrow:'<span class="prev-arrow"><i class="fas fa-angle-right"></i></span>',
  nextArrow:'<span class="next-arrow"><i class="fas fa-angle-left"></i></span>',

  responsive: [
   
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
 
  ]
});
    
    
    
        
$('.blog-slider').slick({
  dots: false,
  infinite: false,
  accessibility: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  rtl:true,
  prevArrow:'<span class="prev-arrow"><i class="fas fa-angle-right"></i></span>',
  nextArrow:'<span class="next-arrow"><i class="fas fa-angle-left"></i></span>',

  responsive: [
   
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint:481,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
 
  ]
});



    
    
});
