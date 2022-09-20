let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = slides[slideIndex-1].alt;
}


function changesubline(n){
  let slides = document.getElementsByClassName("mySlides");
  let caption = document.getElementById("caption");
  let ImgCap = document.getElementsByClassName("Img");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}

  switch(ImgCap[slideIndex-1].alt){

    case "Home Page":
      caption.innerHTML = "";
      break;
    case "Catalog":
      caption.innerHTML = "";
      break;
    case "EcomCart":
      caption.innerHTML = "";
      break;
    case "SignIn":
      caption.innerHTML = "";
      break;
    case "Registar":
      caption.innerHTML = "";
      break;

    default:
    caption.innerHTML = "";
    
  }


}