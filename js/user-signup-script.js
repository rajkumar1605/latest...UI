/* ---------------------------------user-signup-validation-with-ajax----------------------------------------*/
let reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

document.getElementById("user-signup-form").addEventListener('submit', function(event) {

    let fn = document.getElementById("user-fname");
    let fn_msg = document.getElementById("first-name-validate");

    let ln = document.getElementById("user-lname");
    let ln_msg = document.getElementById("last-name-validate");

    let gen = document.getElementById("user-gender");
    let gen_msg = document.getElementById("gender-validate");

    let edu = document.getElementById("user-education");
    let edu_msg = document.getElementById("education-validate");

    let phone = document.getElementById("user-num");
    let phone_msg = document.getElementById("num-validate");

    let email = document.getElementById("user-signup-email");
    let email_msg = document.getElementById("signup-email-validate");

    let reemail = document.getElementById("user-re-email");
    let reemail_msg = document.getElementById("reemail-validate");

    let password = document.getElementById("user-signup-password");
    let password_msg = document.getElementById("signup-password-validate");

    let repassword = document.getElementById("user-re-password");
    let repassword_msg = document.getElementById("repassword-validate");

    let sechoice = document.getElementById("user-security-question");
    let sechoice_msg = document.getElementById("security-question-validate");

    if (fn.value === "") {
        fn.style.border = "2px solid red";
        fn_msg.style.visibility = "visible";
        fn_msg.style.color = "yellow";
        fn_msg.innerHTML = "Please enter your first Name";
        event.preventDefault();
        fn.focus();
        return false;
    } else {
        fn_msg.style.visibility = "hidden";
        fn.style = "none";
    }

    if (ln.value === "") {
        ln.style.border = "2px solid red";
        ln_msg.style.visibility = "visible";
        ln_msg.style.color = "yellow";
        ln_msg.innerHTML = "Please enter your last name.";
        event.preventDefault();
        ln.focus();
        return false;
    } else {
        ln_msg.style.visibility = "hidden";
        ln.style = "none";
    }

    if (!((gen.value).localeCompare("0"))) {
        gen.style.border = "2px solid red";
        gen_msg.style.visibility = "visible";
        gen_msg.style.color = "yellow";
        gen_msg.innerHTML = "Please select your gender.";
        event.preventDefault();
        gen.focus();
        return false;
    } else {
        gen_msg.style.visibility = "hidden";
        gen.style = "none";
    }

    if (edu.value === "") {
        edu.style.border = "2px solid red";
        edu_msg.style.visibility = "visible";
        edu_msg.style.color = "yellow";
        edu_msg.innerHTML = "Please enter your education details here";
        event.preventDefault();
        edu.focus();
        return false;
    } else {
        edu_msg.style.visibility = "hidden";
        edu.style = "none";
    }

    if (phone.value === "") {
        phone.style.border = "2px solid red";
        phone_msg.style.visibility = "visible";
        phone_msg.style.color = "yellow";
        phone_msg.innerHTML = "Please enter your contact number.";
        event.preventDefault();
        phone.focus();
        return false;
    } else if (((phone.value.length) >= 15) || ((phone.value.length) < 7)) {
        phone.style.border = "2px solid red";
        phone_msg.style.visibility = "visible";
        phone_msg.style.color = "yellow";
        phone_msg.innerHTML = "Entered contact number is not valid.";
        event.preventDefault();
        phone.focus();
        return false;
    } else {
        phone_msg.style.visibility = "hidden";
        phone.style = "none";
    }

    if (email.value === "") {
        email.style.border = "2px solid red";
        email_msg.style.visibility = "visible";
        email_msg.style.color = "yellow";
        email_msg.innerHTML = "Please enter your email address.";
        event.preventDefault();
        email.focus();
        return false;
    } else if (!(reg.test(email.value))) {
        email.style.border = "2px solid red";
        email_msg.style.visibility = "visible";
        email_msg.style.color = "yellow";
        email_msg.innerHTML = "Entered email id is not valid.";
        event.preventDefault();
        email.focus();
        return false;
    } else {
        email_msg.style.visibility = "hidden";
        email.style = "none";
    }

    if (reemail.value === "") {
        reemail.style.border = "2px solid red";
        reemail_msg.style.visibility = "visible";
        reemail_msg.style.color = "yellow";
        reemail_msg.innerHTML = "Please re-enter your email address.";
        event.preventDefault();
        reemail.focus();
        return false;
    } else if (!(reg.test(reemail.value))) {
        reemail.style.border = "2px solid red";
        reemail_msg.style.visibility = "visible";
        reemail_msg.style.color = "yellow";
        reemail_msg.innerHTML = "Re-entered email address is not valid.";
        event.preventDefault();
        reemail.focus();
        return false;
    } else if ((email.value).localeCompare(reemail.value) !== 0) {
        email.style.border = "2px solid red";
        reemail.style.border = "2px solid red";
        reemail_msg.style.visibility = "visible";
        reemail_msg.style.color = "yellow";
        reemail_msg.innerHTML = "Entered email id's are mis-matching.";
        event.preventDefault();
        email.focus();
        return false;
    } else {
        email_msg.style.visibility = "hidden";
        reemail_msg.style.visibility = "hidden";
        email.style = "none";
        reemail.style = "none";
    }

    if (password.value === "") {
        password.style.border = "2px solid red";
        password_msg.style.visibility = "visible";
        password_msg.style.color = "yellow";
        password_msg.innerHTML = "Please enter your password.";
        event.preventDefault();
        password.focus();
        return false;
    } else {
        password_msg.style.visibility = "hidden";
        password.style = "none";
    }

    if (repassword.value === "") {
        repassword.style.border = "2px solid red";
        repassword_msg.style.visibility = "visible";
        repassword_msg.style.color = "yellow";
        repassword_msg.innerHTML = "Please re-enter your password.";
        event.preventDefault();
        repassword.focus();
        return false;
    } else if (!((password.value) === (repassword.value))) {
        password.style.border = "2px solid red";
        repassword.style.border = "2px solid red";
        repassword_msg.style.visibility = "visible";
        repassword_msg.style.color = "yellow";
        repassword_msg.innerHTML = "Entered passwords are mis-matching.";
        event.preventDefault();
        password.focus();
        return false;
    } else {
        password_msg.style.visibility = "hidden";
        repassword_msg.style.visibility = "hidden";
        password.style = "none";
        repassword.style = "none";
    }


    if (!((sechoice.value).localeCompare("0"))) {
        sechoice.style.border = "2px solid red";
        sechoice_msg.style.visibility = "visible";
        sechoice_msg.style.color = "yellow";
        sechoice_msg.innerHTML = "Please select the security question.";
        event.preventDefault();
        sechoice.focus();
        return false;
    } else {
        sechoice_msg.style.visibility = "hidden";
        sechoice.style = "none";
    }

    if ((!((sechoice.value).localeCompare("team"))) ||
        (!((sechoice.value).localeCompare("movie"))) ||
        (!((sechoice.value).localeCompare("nick_name"))) ||
        (!((sechoice.value).localeCompare("job"))) ||
        (!((sechoice.value).localeCompare("friend")))) {
        let sans = document.getElementById("security-answer");
        let sans_msg = document.getElementById("security-answer-validate");
        if (sans.value === "") {
            sans.style.border = "2px solid red";
            sans_msg.style.visibility = "visible";
            sans_msg.style.color = "yellow";
            sans_msg.innerHTML = "Please enter your answer for the security question.";
            event.preventDefault();
            sans.focus();
            return false;
        } else {
            sans_msg.style.visibility = "hidden";
            sans.style = "none";
        }
    }
    if (!((sechoice.value).localeCompare("own"))) {
        let scr = document.getElementById("own-security-question");
        let own_sans = document.getElementById("security-answer");
        let own_ques_msg = document.getElementById("own-security-question-validate");
        let own_ans_msg = document.getElementById("security-answer-validate");
        if (scr.value === "") {
            scr.style.border = "2px solid red";
            own_ques_msg.style.visibility = "visible";
            own_ques_msg.style.color = "yellow";
            own_ques_msg.innerHTML = "Please create your own security question.";
            event.preventDefault();
            scr.focus();
            return false;
        } else {
            own_ques_msg.style.visibility = "hidden";
            scr.style = "none";
        }
        if (own_sans.value === "") {
            own_sans.style.border = "2px solid red";
            own_ans_msg.style.visibility = "visible";
            own_ans_msg.style.color = "yellow";
            own_ans_msg.innerHTML = "Please enter your answer for your own security question.";
            event.preventDefault();
            own_sans.focus();
            return false;
        } else {
            own_ans_msg.style.visibility = "hidden";
            own_sans.style = "none";
        }
    }
    return true;

});


document.getElementById("own-security-question-for-js").style.display = "none";
document.getElementById("security-answer-for-js").style.display = "none";

document.getElementById("user-security-question").addEventListener("change", function(event) {
    document.getElementById("security-answer").style = "none";
    document.getElementById("security-answer-validate").style.visibility = "hidden";

    if (((event.target.value).localeCompare("own")) !== 0) {
        let own_security_question = document.getElementById("own-security-question-for-js");
        let security_answer = document.getElementById("security-answer-for-js");

        own_security_question.style.display = "none";
        security_answer.style.display = "block";
        document.getElementById("security-answer").focus();

    } else if (((event.target.value).localeCompare("own")) === 0) {
        let own_security_question = document.getElementById("own-security-question-for-js");
        let security_answer = document.getElementById("security-answer-for-js");

        own_security_question.style.display = "block";
        security_answer.style.display = "block";
        document.getElementById("own-security-question").focus();
    }
});


/*--------------------------------------Ajax------------------------------------*/

// document.getElementById("user-security-question").addEventListener("change", function(event) {
//     // console.log(event.target.value);
//     if (((event.target.value).localeCompare("own")) !== 0) {
//         let req;
//         let url = "push-security-ans-form.html";
//         if (window.XMLHttpRequest) {
//             req = new XMLHttpRequest();
//         } else if (window.ActiveXObject) {
//             req = new ActiveXObject("Microsoft.XMLHTTP");
//         }
//         try {
//             req.onreadystatechange = function() {
//                 if (this.readyState === 4 && this.status === 200) {
//                     let val = req.responseText;
//                     document.getElementById("user-signup-input").innerHTML = val;
//                 }
//             }
//             req.open("GET", url, true);
//             req.send();
//         } catch (e) {
//             alert("Sorry unable to connect to the ajax html page. Try after sometime.");
//             return false;
//         }
//     } else if (((event.target.value).localeCompare("own")) === 0) {
//         let req;
//         let url = "push-own-security.html";
//         if (window.XMLHttpRequest) {
//             req = new XMLHttpRequest();
//         } else if (window.ActiveXObject) {
//             req = new ActiveXObject("Microsoft.XMLHTTP");
//         }
//         try {
//             req.onreadystatechange = function() {
//                 if (this.readyState === 4 && this.status === 200) {
//                     let val = req.responseText;
//                     document.getElementById("user-signup-input").innerHTML = val;
//                 }
//             }
//             req.open("GET", url, true);
//             req.send();
//         } catch (e) {
//             alert("Sorry unable to connect to the ajax html page. Try after sometime.");
//             return false;
//         }
//     }
// });