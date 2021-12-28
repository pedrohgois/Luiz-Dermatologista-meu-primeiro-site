var slideIndex = 1;
showSlidesConsultorio(slideIndex);

function plusSlides(n) {
  showSlidesConsultorio(slideIndex += n);
}

function currentSlide(n) {
  showSlidesConsultorio(slideIndex = n);
}

function showSlidesConsultorio(n) {
  var i;
  var slides = document.getElementsByClassName("mySlidesConsultorio");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}