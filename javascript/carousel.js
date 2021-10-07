let slidePostiton=0;
const slides= document.getElementsByClassName('home-carousel-item');
const totalslides = slides.length;

document.getElementById('carousel-button-prev').addEventListener("click", function(){
  moveToPrevSlide();
})
document.getElementById('carousel-button-next').addEventListener("click", function(){
  moveToNextSlide();
})


  function updateSlidePostion(){
    for(let slide of slides){
    slide.classList.remove('home-carousel-item--visible');
    slide.classList.add('home-carousel-item--hidden')
  }
  slides[slidePostiton].classList.add('home-carousel-item--visible');
  }



function moveToPrevSlide(){

  if(slidePostiton == 0){
    slidePostiton = totalslides-1;
  }
  else{
    slidePostiton--;
  }
  updateSlidePostion();
}

function moveToNextSlide(){
  
  if(slidePostiton == totalslides-1){
    slidePostiton = 0;
  }else {
    slidePostiton++;
  }
  updateSlidePostion();
}
