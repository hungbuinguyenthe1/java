document.addEventListener("DOMContentLoaded", function() {
    function updateProgress(progressPercentage) {
        const progressBarFill = document.getElementById('progress');
        progressBarFill.style.width = `${progressPercentage}%`;
      }
    
      updateProgress(75);
})
