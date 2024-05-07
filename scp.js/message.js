document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('myForm');
  const errorMessage = document.getElementById('error-message');
  form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');

    if (!nameInput.value || !emailInput.value) {
      errorMessage.textContent = 'Please fill out all required fields.';
    } else {
      errorMessage.textContent = '';
      form.submit();
    }
  });
});
