

function validate() {
    var inputUserName = document.getElementById("username").value;
    var inputPassword = document.getElementById("password").value;


    if (inputUserName.match(/\s/)) {
        alert("No space please");
        return false;
    };

    window.location.href = 'home.html';
};
