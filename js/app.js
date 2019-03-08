// for responsive slider
$('.responsive').slick({
  dots: true,
	prevArrow: $('.prev'),
	nextArrow: $('.next'),
  infinite: true,
  autoplay: false,
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

// js CHARTS about us page
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

// bar chart advertise page Household income
if ($('#myBarChart').length){
  var ctx = document.getElementById("myBarChart").getContext('2d');
  var myBarChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ["1", "2", "3", "4", "5", "6", "7"],
      datasets: [{
        backgroundColor: "#990000",
        data: [90,10,30,50,80,60,75]
      }]
    },
    options: {
      responsive: true,
      barValueSpacing: 15,
      scales: {
        xAxes: [{
            stacked: true
        }],
        yAxes: [{
            stacked: true
        }]
    }
    }
  });
}


// pie chart advertise page Gender percentage
if ($('#myPieChart').length){
  var ctx = document.getElementById("myPieChart").getContext('2d');
  var myPieChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ["dD 1", "dD 2"],
      datasets: [{
        backgroundColor: [
          '#990000',
          '#DDDDDD'
        ],
        data: [90,10]
      }]
    },
    options: {
      responsive: true,
      barValueSpacing: 15,
      scales: {
        xAxes: [{
            stacked: true
        }],
        yAxes: [{
            stacked: true
        }]
    }
    }
  });
}
// bar chart advertise page second chart Age breakdown
if ($('#myBarChart-t').length){
  var ctx = document.getElementById("myBarChart-t").getContext('2d');
  var myBarChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ["1", "2", "3", "4", "5", "6", "7"],
      datasets: [{
        backgroundColor: "#990000",
        data: [90,60,30,50,80,60,75]
      }]
    },
    options: {
      responsive: true,
      barValueSpacing: 15,
      scales: {
        xAxes: [{
            stacked: true
        }],
        yAxes: [{
            stacked: true
        }]
    }
    }
  });
}

// pie chart advertise page second chart loyalty
if ($('#myPieChart-t').length){
  var ctx = document.getElementById("myPieChart-t").getContext('2d');
  var myPieChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ["dD 1", "dD 2"],
      datasets: [{
        backgroundColor: [
          '#990000',
          '#DDDDDD'
        ],
        data: [90,10]
      }]
    },
    options: {
      responsive: true,
      barValueSpacing: 15,
      scales: {
        xAxes: [{
            stacked: true
        }],
        yAxes: [{
            stacked: true
        }]
    }
    }
  });
}

// bar chart advertise page demographics

if ($('#myBarChart-tt').length){
  var ctx = document.getElementById("myBarChart-tt").getContext('2d');
  var myBarChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14"],
      datasets: [{
        backgroundColor: "#990000",
        data: [90,60,30,50,80,60,75,60,30,50,80,60,75,50]
      }]
    },
    options: {
      responsive: true,
      barValueSpacing: 15,
      scales: {
        xAxes: [{
            stacked: true
        }],
        yAxes: [{
            stacked: true
        }]
    }
    }
  });
}
// date
$( function() {
  $( "#datepicker" ).datepicker();
} );

// stickey header
window.onscroll = function() {myFunction()};
var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// submit event page drop down
  $(document).foundation();

  // Menu links disabled just for demo purposes
  $('.menu a').on('click', function (a) {
    a.preventDefault();
  });