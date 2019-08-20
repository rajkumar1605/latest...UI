/* ---------------------------------user-signin-validation----------------------------------------*/
let reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

document.getElementById("admin-email").addEventListener('keyup', function() {

    let email = document.getElementById("admin-email");
    let msg = document.getElementById("email-validate");
    if (!(reg.test(email.value))) {
        email.style.border = "3px solid orange";
        msg.style.visibility = "visible";
        msg.style.color = "yellow";
        msg.innerHTML = "Entered email address does not match with the globally preferred email pattern";
        email.focus();
        return false;
    } else {
        msg.style.visibility = "hidden";
        email.style = "none";
        // document.location.reload(true);
    }
    return true;
});

document.getElementById("admin-password").addEventListener('click', function() {

    let email = document.getElementById("admin-email");
    let msg = document.getElementById("email-validate");
    if (email.value === "") {
        email.style.border = "3px solid orange";
        msg.style.visibility = "visible";
        msg.style.color = "yellow";
        msg.innerHTML = "Please Enter the email address";
        email.focus();
        return false;
    } else if (!(reg.test(email.value))) {
        email.style.border = "3px solid orange";
        msg.style.visibility = "visible";
        msg.style.color = "yellow";
        msg.innerHTML = "Entered email address does not match with the globally preferred email pattern";
        email.focus();
        return false;
    } else {
        msg.style.visibility = "hidden";
        email.style = "none";
    }
    return true;
    /* for checking the entered email id in the db 
    let req;
    let url = "?user-email-id=" + email + "&check=" + 1;
    if (window.ActiveXObject) {
        req = new ActiveXObject("Microsoft.XMLHTTP");
    } else {
        req = new XMLHttpRequest();
    }
    try {
        req.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var val = req.responseText;
                // console.log("Response value :" + val);
                if (val == "no") {
                    // event.preventDefault();
                    alert("Entered Email Id Is Incorrect!");
                    document.getElementById('user-email').style.borderColor = "red";
                    document.getElementById("user-email").select();
                    return false;
                } else if (val === "yes") {
                    return true;
                }
            }
        }

        req.open("POST", url, true);
        req.send();
    } catch (e) {
        console.log(e);
        alert("Unable to connect Server");
        return false;
    }*/
});

document.getElementById("admin-sign-in-submit").addEventListener('click', function(event) {

    let email = document.getElementById("admin-email");
    let password = document.getElementById("admin-password");
    let msg = document.getElementById("email-validate");
    let msg_pass = document.getElementById("password-validate");

    if (email.value === "") {
        email.style.border = "3px solid orange";
        msg.innerHTML = "Please Enter the email address";
        msg.style.visibility = "visible";
        msg.style.color = "yellow";
        event.preventDefault();
        email.focus();
        msg_pass.style.visibility = "hidden";
        password.style = "none";
        return false;
    } else if (!(reg.test(email.value))) {
        email.style.border = "3px solid orange";
        msg.style.visibility = "visible";
        msg.style.color = "yellow";
        msg.innerHTML = "Entered email address does not match with the globally preferred email pattern";
        event.preventDefault();
        email.focus();
        msg_pass.style.visibility = "hidden";
        password.style = "none";
        return false;
    } else {
        msg.style.visibility = "hidden";
        email.style = "none";
    }

    if (password.value === "") {
        password.style.border = "3px solid orange";
        msg_pass.style.visibility = "visible";
        msg_pass.style.color = "yellow";
        msg_pass.innerHTML = "Please Enter the password";
        event.preventDefault();
        password.focus();
        return false;
    } else {
        msg_pass.style.visibility = "hidden";
        password.style = "none";
    }

    return true;
    /*for checking the entered email id and password in the db 
    let req;
    var url = "?user-email-id=" + email + "&password=" + password + "&check=" + 2;
    	if (window.ActiveXObject) {
    		req = new ActiveXObject("Microsoft.XMLHTTP");
    	} else {
    		req = new XMLHttpRequest();
    	}

    	try {
    		req.onreadystatechange = function() {
    			if (this.readyState == 4 && this.status == 200) {
    				var val = req.responseText;
    				// console.log("Response value :" + val);
    				if (val === "both") {
    					// event.preventDefault();
    					alert("Entered Employee Id Is Incorrect!");
    					return false;
    				} else if (val == "pass") {
    					// event.preventDefault();
    					alert("Password is incorrect...Please check and re-enter the correct password!");
    					return false;
    				} else if (val == "yes") {
    					return true;
    				}
    			}
    		}

    		req.open("POST", url, true);
    		req.send();
    	} catch (e) {
    		console.log(e);
    		alert("Unable to connect Server");
    		return false;
    	}
    */
});