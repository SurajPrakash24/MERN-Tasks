
function validateForm() {
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var repassword = document.getElementById("repassword").value;
    var age = document.getElementById("age").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    var state = document.getElementById("state").value;
    var country = document.getElementById("country").value;
    var declaration = document.getElementById("declaration").checked;

    if (fname === "") {
        alert("Please enter your First Name.");
        return false;
    }

    if (lname === "") {
        alert("Please enter your Last Name.");
        return false;
    }

    if (email === "") {
        alert("Please enter your Email.");
        return false;
    }

    if (password.length < 8) {
        alert("Password should be at least 8 characters long.");
        return false;
    }

    if (password !== repassword) {
        alert("Passwords do not match.");
        return false;
    }

    if (age === "") {
        alert("Please enter your Age.");
        return false;
    }

    if (phone === "") {
        alert("Please enter your Phone Number.");
        return false;
    }

    if (address === "") {
        alert("Please enter your Address.");
        return false;
    }

    if (state === "") {
        alert("Please enter your State.");
        return false;
    }

    if (country === "") {
        alert("Please select your Country.");
        return false;
    }

    if (!declaration) {
        alert("Please declare that all the given details are true.");
        return false;
    }

    return true;
}