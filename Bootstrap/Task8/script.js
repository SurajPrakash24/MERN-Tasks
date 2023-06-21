const form = document.getElementById('projectForm');
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      clearErrorMessages();

      const firstName = document.getElementById('Name');
      const email = document.getElementById('email');
      const phone = document.getElementById('password');


      if (!Name.value) {
        showError(Name, 'Name is required');
      }

      if (!email.value) {
        showError(email, 'Email is required');
      } else if (!validateEmail(email.value)) {
        showError(email, 'Please enter a valid email address');
      }

      if (!password.value) {
        showError(password, 'Password is required');
      }

    

    function showError(input, message) {
      const errorText = input.nextElementSibling;
      errorText.textContent = message;
    }

    function clearErrorMessages() {
      const errorTextList = document.getElementsByClassName('error-text');
      for (let i = 0; i < errorTextList.length; i++) {
        errorTextList[i].textContent = '';
      }
    }

    function validateEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }

})