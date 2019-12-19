// var slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("demo");
//   var captionText = document.getElementById("caption");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
//   captionText.innerHTML = dots[slideIndex-1].alt;
// }

 //image     togle

 $(document).ready(function(){
  $("#surge").click(function(){
    $("#surge").slideDown(200).hide(1000);
    $("#surgery").slideUp(200).show(1000);
})
$("#surgery").click(function(){
    $("#surgery").slideUp(200).hide(1000);
    $("#surge").slideDown(200).show(1000);
  });
});

$(document).ready(function(){
  $("#routin").click(function(){
    $("#routin").slideDown(200).hide(200);
    $("#routine").slideUp(200).show(200);
  })
  $("#routine").click(function(){
    $("#routine").slideUp(200).hide(1000);
    $("#routin").slideDown(200).show(1000);
  })
})

$(document).ready(function(){
  $("#genera").click(function(){
    $("#genera").slideDown(200).hide(1000);
    $("#general").slideUp(200).show(1000);
  })
  $("#general").click(function(){
    $("#general").slideUp(200).hide(1000);
    $("#genera").slideDown(200).show(1000);
  })
})

$(document).ready(function(){
  $("#shop").click(function(){
    $("#shop").slideDown(2000).hide(100);
    $("#pet").slideUp(2000).show(100);
  })
  $("#pet").click(function(){
    $("#pet").slideUp(2000).hide(1000);
    $("#shop").slideDown(2000).show(1000);
  })
})

$(document).ready(function(){
  $("#vaccin").click(function(){
    $("#vaccin").slideDown(2000).hide(1000);
    $("#vaccinate").slideUp(2000).show(1000);
  })
  $("#vaccinate").click(function(){
    $("#vaccinate").slideUp(2000).hide(1000);
    $("#vaccin").slideDown(2000).show(1000);
  })
})

$(document).ready(function(){
  $("#groom").click(function(){
    $("#groom").slideDown(2000).hide(1000);
    $("#grooming").slideUp(2000).show(1000);
  })
  $("#grooming").click(function(){
    $("#grooming").slideUp(2000).hide(1000);
    $("#groom").slideDown(2000).show(1000);
  })
})

$(document).ready(function(){
  $("#dent").click(function(){
    $("#dent").slideDown(2000).hide(1000);
    $("#dentistry").slideUp(2000).show(1000);
  })
  $("#dentistry").click(function(){
    $("#dentistry").slideUp(2000).hide(1000);
    $("#dent").slideDown(2000).show(1000);
  })
})

$(document).ready(function(){
  $("#nutrition1").click(function(){
    $("#nutrition1").slideDown(2000).hide(1000);
    $("#nutrition").slideUp(2000).show(1000);
  })
  $("#nutrition").click(function(){
    $("#nutrition").slideUp(2000).hide(1000);
    $("#nutrition1").slideDown(2000).show(1000);
  })
})

$(document).ready(function(){
  $("#animal1").click(function(){
    $("#animal1").slideDown(2000).hide(1000);
    $("#animal").slideUp(2000).show(1000);
  })
  $("#animal1").click(function(){
    $("#animal").slideUp(2000).hide(1000);
    $("#animal1").slideDown(2000).show(1000);
  })
})
