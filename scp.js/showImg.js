document.addEventListener("DOMContentLoaded", function() {
    var slideIndex = 0;
    function showSlides() {
      var slides = document.getElementsByClassName("slide");
      for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      if (slideIndex >= slides.length) { slideIndex = 0; }
      if (slideIndex < 0) { slideIndex = slides.length - 1; }
      slides[slideIndex].style.display = "block";
    }
  
    document.getElementById("prevBtn").addEventListener("click", function() {
      slideIndex -= 1;
      showSlides();
    });
  
    document.getElementById("nextBtn").addEventListener("click", function() {
      slideIndex += 1;
      showSlides();
    });

    showSlides();
  });
  