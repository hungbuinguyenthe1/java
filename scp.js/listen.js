document.addEventListener("DOMContentLoaded", function() {
    const textInput = document.getElementById('textInput');
    textInput.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        console.log('Enter key pressed!');
      }
    });
})