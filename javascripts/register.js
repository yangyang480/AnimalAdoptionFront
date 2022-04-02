function validate() {
    var isValid = true;

    reset();

    // Validate Email
    var email = document.getElementById('email').value;
    if (!email) {
        isValid = false;
        document.getElementById('emptyEmail').style.display = "block";
    }

    // Validate Password
    var password = document.getElementById('password').value;
    if (!password) {
        isValid = false;
        document.getElementById('emptyPassword').style.display = "block";
    }
    var confirmPassword = document.getElementById('confirmPassword').value;
    if (confirmPassword != password) {
        isValid = false;
        document.getElementById('passwordNotSame').style.display = "block";
    }

    // Validate Register As
    var registerAs = document.getElementById('roles');
    var roles = registerAs.getElementsByTagName('input');
    var validCheckedRole = false;
    for (i = 0; i < roles.length; i++) {
        if (roles[i].type == "radio" && roles[i].checked) {
            validCheckedRole = true;
        }
    }
    if (!validCheckedRole) {
        isValid = false;
        document.getElementById('emptyRegisterAs').style.display = "block";
    }

    // Validate Address

    // Validate City

    // Validate State

    // Validate Zipcode

    // Validate Phone Number

    if (isValid) {
        window.location.href = 'home.html';
    }
}

function reset() {
    document.getElementById('emptyEmail').style.display = "none";
    document.getElementById('emptyPassword').style.display = "none";
    document.getElementById('passwordNotSame').style.display = "none";
    document.getElementById('emptyRegisterAs').style.display = "none";
}