// Validation left
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var rememberMe = document.getElementById("rememberMe").checked;
    // Perform login validation and authentication here
    console.log("Username: " + username);
    console.log("Password: " + password);
    console.log("Remember me: " + rememberMe);
    // Redirect to the user's profile page or show an error message
});