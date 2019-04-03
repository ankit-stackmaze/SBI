// **** Drag and drop **** for product single page //
let dropArea = document.getElementById("drop-area")

function preventDefaults (e) {
  e.preventDefault()
  e.stopPropagation()
}

function highlight(e) {
  dropArea.classList.add('highlight')
}

function unhighlight(e) {
  dropArea.classList.remove('active')
}

function handleDrop(e) {
  var dt = e.dataTransfer
  var files = dt.files

  handleFiles(files)
}

let uploadProgress = []
let progressBar = document.getElementById('progress-bar')

function initializeProgress(numFiles) {
  progressBar.value = 0
  uploadProgress = []

  for(let i = numFiles; i > 0; i--) {
    uploadProgress.push(0)
  }
}

function updateProgress(fileNumber, percent) {
  uploadProgress[fileNumber] = percent
  let total = uploadProgress.reduce((tot, curr) => tot + curr, 0) / uploadProgress.length
  console.debug('update', fileNumber, percent, total)
  progressBar.value = total
}

function handleFiles(files) {
  files = [...files]
  initializeProgress(files.length)
  files.forEach(uploadFile)
  files.forEach(previewFile)
}

function previewFile(file) {
  let reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onloadend = function() {
    let img = document.createElement('img')
    img.src = reader.result
    document.getElementById('gallery').appendChild(img)
  }
}

function uploadFile(file, i) {
  var url = 'https://api.cloudinary.com/v1_1/joezimim007/image/upload'
  var xhr = new XMLHttpRequest()
  var formData = new FormData()
  xhr.open('POST', url, true)
  xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest')

  // Update progress (can be used to show progress indicator)
  xhr.upload.addEventListener("progress", function(e) {
    updateProgress(i, (e.loaded * 1000.0 / e.total) || 1000)
  })

  xhr.addEventListener('readystatechange', function(e) {
    if (xhr.readyState == 4 && xhr.status == 200) {
      updateProgress(i, 100) // <- Add this
    }
    else if (xhr.readyState == 4 && xhr.status != 200) {
      // Error. Inform the user
    }
  })
}

// my account page tabs
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// FOR TOOGLE MENU in home page
function openNav() {
  document.getElementById("mySidenav").style.width = "350px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

// for responsive slider
$('.responsive').slick({
  dots: true,
  infinite: true,
  autoplay: true,
  arrows: true,
  nextArrow: '<div class="slick-custom-arrow slick-custom-arrow-right"><i class="fas fa-angle-right"></i></div>',
  prevArrow: '<div class="slick-custom-arrow slick-custom-arrow-left"><i class="fa fa-angle-left"></i></div>',
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


// slider-articleformate-page
$(document).ready(function(){
  
// SLIDER-two
  $('.slider-heading').slick({
    dots: true,
    speed: 1000,
    infinite: true,
    arrows: true,
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
    arrows: true,
    nextArrow: '<div class="slick-custom-arrow slick-custom-arrow-right"><i class="fas fa-angle-right"></i></div>',
    prevArrow: '<div class="slick-custom-arrow slick-custom-arrow-left"><i class="fa fa-angle-left"></i></div>',
    infinite: true,
    centerMode: false,
    });
  });

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
  // date for event archive page
  $( function() {
    $( "#datepicker" ).datepicker();
  } );

// // stickey header
$(window).scroll(function(){
  if ($(window).scrollTop() >= 0) {
      $('nav').addClass('fixed-header');
      $('nav div').addClass('visible-title');
  }
  else {
      $('nav').removeClass('fixed-header');
      $('nav div').removeClass('visible-title');
  }
});

// submit event page drop down
  $(document).foundation();

  // Menu links disabled just for demo purposes
  $('.menu a').on('click', function (a) {
    a.preventDefault();
  });

// for plus and minus button at cart page
$('.add').click(function () {
  if ($(this).prev().val() < 100) {
    $(this).prev().val(+$(this).prev().val() + 1);
  }
});
$('.sub').click(function () {
  if ($(this).next().val() > 1) {
    if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
  }
});
// submit event page drop down scss AND editorial staff page
jQuery(document).ready(function($) {
	var $modal = $('#modal');

	$('.launcher').on('click', openModal);

	$modal
		.on('click', closeModal)
		.on('click', '.modal-close', closeModal)
		.on('click', '.modal-dialog', function(event) {
		event.stopPropagation();  // prevent closing the modal window when user clicks on the window itself
	});

	function closeModal() {
		$modal.fadeOut();
	};

	function openModal() {
		$modal.fadeIn();
	};
});

// jump section scss about us page
$(document).ready(function() {
  $('a[href*=#]').bind('click', function(e) {
      e.preventDefault(); // prevent hard jump, the default behavior

      var target = $(this).attr("href"); // Set the target as variable

      // perform animated scrolling by getting top-position of target-element and set it as scroll target
      $('html, body').stop().animate({
          scrollTop: $(target).offset().top
      }, 600, function() {
          location.hash = target; //attach the hash (#jumptarget) to the pageurl
      });

      return false;
  });
});

$(window).scroll(function() {
  var scrollDistance = $(window).scrollTop();

  // Assign active class to nav links while scolling
  $('.page-section').each(function(i) {
      if ($(this).position().top <= scrollDistance) {
          $('.navigation a.active').removeClass('active');
          $('.navigation a').eq(i).addClass('active');
      }
  });
}).scroll();

// sticky head from about us page

var header = document.getElementById("myHeader");
if (header){
  var sticky = header.offsetTop;
  window.onscroll = function() {myFunction()};
}

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}



// var sidebar = $('myHeader');
// var nav = sidebar.find('nav');
// var navWidth = nav.width();

// $(window).scroll(function() {
//   if($(this).scrollTop() > sidebar.offset().top) {
//     nav.css({position: 'fixed', width: navWidth});
//   } else {
//     nav.css({position: 'relative', top: 0});
//   }
// });
