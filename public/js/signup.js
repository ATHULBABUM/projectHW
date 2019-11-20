
function validateForm() {
    var firstName = document.getElementById("firstname").value;
    //var lastName =document.getElementById("lastname")
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var pass1 = document.getElementById("password").value;
    var pass2 = document.getElementById("confirmpassword").value;
    var phone_re = /^\d{10}$/;
    var email_re = /\S+@\S+\.\S+/;
    //var result =false;
    if (firstName.length < 5) {
        alert("Firstname required atleast 5 characters");
        return false;
    }
    else if (email_re.test(email) == false) {
        alert("invalid email");
        return false;
    }
    else if (pass1 == "") {
        alert("enter password");
        return false;
    }
    else if (pass2 == "") {
        alert(" enter confirm password");
        return false;
    }
    else if (pass1 != pass2) {
        alert("password is not matching");
        return false;
    }

    else if (phone_re.test(phone) == false) {
        alert(" invalid phone number");
        return false;
    }
}