const form = document.getElementById('projectForm');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  clearErrorMessages();

  const firstName = document.getElementById('firstName');
  const lastName = document.getElementById('lastName');
  const email = document.getElementById('email');
  const phone = document.getElementById('phone');
  const address = document.getElementById('address');
  const city = document.getElementById('city');
  const state = document.getElementById('state');
  const projectDescription = document.getElementById('projectDescription');

  if (!firstName.value) {
    showError(firstName, 'First name is required');
  }

  if (!lastName.value) {
    showError(lastName, 'Last name is required');
  }

  if (!email.value) {
    showError(email, 'Email is required');
  } else if (!validateEmail(email.value)) {
    showError(email, 'Please enter a valid email address');
  }

  if (!phone.value) {
    showError(phone, 'Phone number is required');
  }

  if (!address.value) {
    showError(address, 'Address is required');
  }

  if (!city.value) {
    showError(city, 'City is required');
  }

  if (!state.value) {
    showError(state, 'State is required');
  }

  if (!projectDescription.value) {
    showError(projectDescription, 'Project description is required');
  }
});

function showError(input, message) {
  input.style = "border: 2px solid red";
  const errorText = input.nextElementSibling;
  errorText.textContent = message;
}

function clearErrorMessages() {
  const ip = document.getElementsByTagName("input");
  for(let i=0; i<ip.length; i++) {
    ip[i].style = "border: 1px solid black";
  }
  const ta = document.getElementsByTagName("textarea");
  ta.style = "border: 1px solid black";
  const errorTextList = document.getElementsByClassName('error-text');
  for (let i = 0; i < errorTextList.length; i++) {
    errorTextList[i].textContent = '';
  }
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}