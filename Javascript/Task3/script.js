function validateForm(event) {
  event.preventDefault();

  clearErrors();
  clearBorders();

  var nameInput = document.getElementById("name");
  var emailInput = document.getElementById("email");
  var websiteInput = document.getElementById("website");
  var messageInput = document.getElementById("message");

  if (nameInput.value.trim() === "") {
    displayError("nameError", "name", "This field is required.");
  }

  if (emailInput.value.trim() === "") {
    displayError("emailError", "email", "A valid email address is required.");
  }

  if (websiteInput.value.trim() === "") {
    displayError("websiteError", "website", "A valid url is required.");
  }

  if (messageInput.value.trim() === "") {
    displayError("messageError", "message", "This field is required.");
  }
}

function displayError(elementId, inputId, errorMessage) {
  var errorElement = document.getElementById(elementId);
  var inputElement = document.getElementById(inputId);
  errorElement.textContent = errorMessage;
  inputElement.classList.add("error-border");
}

function clearErrors() {
  var errorElements = document.getElementsByClassName("error");
  for (var i = 0; i < errorElements.length; i++) {
    errorElements[i].textContent = "";
  }
}

function clearBorders() {
  var inputs = document.getElementsByTagName("input");
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].classList.remove("error-border");
  }
}