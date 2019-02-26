// for responsive slider
$('.responsive').slick({
  dots: true,
	prevArrow: $('.prev'),
	nextArrow: $('.next'),
  infinite: true,
  autoplay: true,
  arrows: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
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
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
// for toogle menu
$(document).foundation();
  function myFunction(x) {
  x.classList.toggle("change");
  }

$(document).ready(function(){
  $(".toogle-menu").click(function(){
    $('.btm-header-content ul').animate({
      width: "toggle"
  });
  });
});
   
// slider-articleformate-page
$(document).ready(function(){
  
// SLIDER-two
  $('.slider-heading').slick({
    dots: true,
    speed: 1000,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: '<div class="slick-custom-arrow slick-custom-arrow-right"><i class="fas fa-angle-right"></i></div>',
    prevArrow: '<div class="slick-custom-arrow slick-custom-arrow-left"><i class="fa fa-angle-left"></i></div>',
  });

});

// for video slider script    
  $(document).ready(function(){
    $('.carousel').slick({
    slidesToShow: 1,
    dots:true,
    nextArrow: '<div class="slick-custom-arrow slick-custom-arrow-right"><i class="fas fa-angle-right"></i></div>',
    prevArrow: '<div class="slick-custom-arrow slick-custom-arrow-left"><i class="fa fa-angle-left"></i></div>',
    infinite: true,
    centerMode: false,
    });
  });
  
  // click to up and down menu for (about us page)
  $('.click_advance').click(function(){
    $('.display_advance').toggle('1000');
    icon = $(this).find("i");
    icon.toggleClass("fas fa-angle-up fas fa-angle-down")
   })

  $('.click-t').click(function(){
    $('.display-t').toggle('1000');
    icon = $(this).find("i");
    icon.toggleClass("fas fa-angle-up fas fa-angle-down")
  })

  $('.click_advance-one').click(function(){
    $('.display_advance-one').toggle('1000');
    icon = $(this).find("i");
    icon.toggleClass("fas fa-angle-up fas fa-angle-down")
  })

  $('.click_advance-second').click(function(){
    $('.display_advance-second').toggle('1000');
    icon = $(this).find("i");
    icon.toggleClass("fas fa-angle-up fas fa-angle-down")
  })

  $('.click_advance-third').click(function(){
    $('.display_advance-third').toggle('1000');
    icon = $(this).find("i");
    icon.toggleClass("fas fa-angle-up fas fa-angle-down")
  })
// CHARTS 
  if ($('#myChart').length){
    var ctx = document.getElementById("myChart").getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3],
            backgroundColor: [
              '#003D6B',
              '#990000',
              '#8FA3AD'
            ],
            borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        cutoutPercentage: 90,
      }
    });
  }
