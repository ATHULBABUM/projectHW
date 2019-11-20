function validateLogin(form) {
  var uname = form.inputusername.value;
  var pass = form.inputpassword.value;
  if (uname.length < 5) {
    alert(" invalid name");
    return false;
  }
  else if (pass.length < 8) {
    alert("incorrect password");
    return false;
  }
}