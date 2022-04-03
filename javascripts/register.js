function validate() {
  var isValid = true;

  //call reset method so when we write something in the input the warning will go away.
  reset();

  // Validate Email if !email = true, then will execute the block. email == '' this is false. !email == true.
  var email = document.getElementById("email").value;
  if (!email) {
    isValid = false;
    document.getElementById("emptyEmail").style.display = "block";
    //instead of alert we call the block from the html
  }

  // Validate Password
  var password = document.getElementById("password").value;
  if (!password) {
    isValid = false;
    document.getElementById("emptyPassword").style.display = "block";
  }

  var confirmPassword = document.getElementById("confirmPassword").value;
  if (confirmPassword != password) {
    isValid = false;
    document.getElementById("passwordNotSame").style.display = "block";
  }

  // Validate Roles. If type == radio, and also role[0] or role[1] checked then validCheckRole == ture.
  var registerAs = document.getElementById("roles");
  var roles = registerAs.getElementsByTagName("input");
  var validCheckedRole = false;
  for (i = 0; i < roles.length; i++) {
    if (roles[i].type == "radio" && roles[i].checked) {
      validCheckedRole = true;
    }
  }
  if (!validCheckedRole) {
    isValid = false;
    document.getElementById("emptyRegisterAs").style.display = "block";
  }

  // Validate Address
  var Address = document.getElementById("address").value;
  if (!Address) {
    isValid = false;
    document.getElementById("emptyAddress").style.display = "block";
  }

  // Validate City
  var City = document.getElementById("city").value;
  if (!City) {
    isValid = false;
    document.getElementById("emptyCity").style.display = "block";
  }

  // Validate State
  var State = document.getElementById("state");
  var optionSelIndex = State.options[State.selectedIndex].value;
  if (optionSelIndex == -1) {
    isValid = false;
    document.getElementById("emptySelectState").style.display = "block";
  }

  // Validate Zipcode
  var Zipcode = document.getElementById("zipcode").value;
  if (!Zipcode) {
    isValid = false;
    document.getElementById("emptyZipcode").style.display = "block";
  }

  // Validate Phone Number
  var Phone = document.getElementById("phone").value;
  if (!Phone) {
    isValid = false;
    document.getElementById("emptyPhone").style.display = "block";
  }

  if (isValid) {
    window.location.href = "home.html";
  }
}

function reset() {
  document.getElementById("emptyEmail").style.display = "none";
  document.getElementById("emptyPassword").style.display = "none";
  document.getElementById("passwordNotSame").style.display = "none";
  document.getElementById("emptyRegisterAs").style.display = "none";
  document.getElementById("emptyAddress").style.display = "none";
  document.getElementById("emptyCity").style.display = "none";
  document.getElementById("emptySelectState").style.display = "none";
  document.getElementById("emptyZipcode").style.display = "none";
  document.getElementById("emptyPhone").style.display = "none";
}
