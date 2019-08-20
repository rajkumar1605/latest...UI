/* ---------------------------------user-signup-validation-with-ajax----------------------------------------*/
let reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

document.getElementById("mentor-signup-form").addEventListener('submit', function(event) {

    let fn = document.getElementById("mentor-fname");
    let fn_msg = document.getElementById("first-name-validate");

    let ln = document.getElementById("mentor-lname");
    let ln_msg = document.getElementById("last-name-validate");

    let gen = document.getElementById("mentor-gender");
    let gen_msg = document.getElementById("gender-validate");

    let edu = document.getElementById("mentor-education");
    let edu_msg = document.getElementById("education-validate");

    let tz = document.getElementById("mentor-time-zone");
    let tz_msg = document.getElementById("time-zone-validate");

    let wt = document.getElementById("mentor-work-time");
    let wt_msg = document.getElementById("work-time-validate");

    let skills = document.getElementById("mentor-skills");
    let skills_msg = document.getElementById("skills-validate");

    let facility = document.getElementById("mentor-facilities");
    let fty_msg = document.getElementById("facilities-validate");

    let yoe = document.getElementById("mentor-YOE");
    let yoe_msg = document.getElementById("mentor-YOE-validate");

    let linkdn = document.getElementById("mentor-linkedin");
    let linkdn_msg = document.getElementById("linkedin-validate");

    let phone = document.getElementById("mentor-num");
    let phone_msg = document.getElementById("num-validate");

    let email = document.getElementById("mentor-signup-email");
    let email_msg = document.getElementById("signup-email-validate");

    let reemail = document.getElementById("mentor-re-email");
    let reemail_msg = document.getElementById("reemail-validate");

    let password = document.getElementById("mentor-signup-password");
    let password_msg = document.getElementById("signup-password-validate");

    let repassword = document.getElementById("mentor-re-password");
    let repassword_msg = document.getElementById("repassword-validate");

    let sechoice = document.getElementById("mentor-security-question");
    let sechoice_msg = document.getElementById("security-question-validate");

    if (fn.value === "") {
        fn.style.borderColor = "red";
        fn_msg.style.visibility = "visible";
        fn_msg.style.color = "red";
        fn_msg.innerHTML = "Please enter your first Name";
        event.preventDefault();
        fn.focus();
        return false;
    } else {
        fn_msg.style.visibility = "hidden";
        fn.style = "none";
    }

    if (ln.value === "") {
        ln.style.borderColor = "red";
        ln_msg.style.visibility = "visible";
        ln_msg.style.color = "red";
        ln_msg.innerHTML = "Please enter your last name.";
        event.preventDefault();
        ln.focus();
        return false;
    } else {
        ln_msg.style.visibility = "hidden";
        ln.style = "none";
    }

    if (!((gen.value).localeCompare("0"))) {
        gen.style.borderColor = "red";
        gen_msg.style.visibility = "visible";
        gen_msg.style.color = "red";
        gen_msg.innerHTML = "Please select your gender.";
        event.preventDefault();
        gen.focus();
        return false;
    } else {
        gen_msg.style.visibility = "hidden";
        gen.style = "none";
    }

    if (edu.value === "") {
        edu.style.borderColor = "red";
        edu_msg.style.visibility = "visible";
        edu_msg.style.color = "red";
        edu_msg.innerHTML = "Please enter your education details here";
        event.preventDefault();
        edu.focus();
        return false;
    } else {
        edu_msg.style.visibility = "hidden";
        edu.style = "none";
    }

    if (tz.value === "") {
        tz.style.borderColor = "red";
        tz_msg.style.visibility = "visible";
        tz_msg.style.color = "red";
        tz_msg.innerHTML = "Please enter your time zone details here";
        event.preventDefault();
        tz.focus();
        return false;
    } else {
        tz_msg.style.visibility = "hidden";
        tz.style = "none";
    }

    if (wt.value === "") {
        wt.style.borderColor = "red";
        wt_msg.style.visibility = "visible";
        wt_msg.style.color = "red";
        wt_msg.innerHTML = "Please enter your work timimg details here";
        event.preventDefault();
        wt.focus();
        return false;
    } else {
        wt_msg.style.visibility = "hidden";
        wt.style = "none";
    }

    if (skills.value === "") {
        skills.style.borderColor = "red";
        skills_msg.style.visibility = "visible";
        skills_msg.style.color = "red";
        skills_msg.innerHTML = "Please enter your skills here";
        event.preventDefault();
        skills.focus();
        return false;
    } else {
        skills_msg.style.visibility = "hidden";
        skills.style = "none";
    }

    if (facility.value === "") {
        facility.style.borderColor = "red";
        fty_msg.style.visibility = "visible";
        fty_msg.style.color = "red";
        fty_msg.innerHTML = "Please enter about your facilities provided details here";
        event.preventDefault();
        facility.focus();
        return false;
    } else {
        fty_msg.style.visibility = "hidden";
        facility.style = "none";
    }

    if (yoe.value === "") {
        yoe.style.borderColor = "red";
        yoe_msg.style.visibility = "visible";
        yoe_msg.style.color = "red";
        yoe_msg.innerHTML = "Please enter your experience details here";
        event.preventDefault();
        yoe.focus();
        return false;
    } else {
        yoe_msg.style.visibility = "hidden";
        yoe.style = "none";
    }

    if (linkdn.value === "") {
        linkdn.style.borderColor = "red";
        linkdn_msg.style.visibility = "visible";
        linkdn_msg.style.color = "red";
        linkdn_msg.innerHTML = "Please enter your LinkedIn URL details here";
        event.preventDefault();
        linkdn.focus();
        return false;
    } else {
        linkdn_msg.style.visibility = "hidden";
        linkdn.style = "none";
    }

    if (phone.value === "") {
        phone.style.borderColor = "red";
        phone_msg.style.visibility = "visible";
        phone_msg.style.color = "red";
        phone_msg.innerHTML = "Please enter your contact number.";
        event.preventDefault();
        phone.focus();
        return false;
    } else if (((phone.value.length) >= 15) || ((phone.value.length) < 7)) {
        phone.style.borderColor = "red";
        phone_msg.style.visibility = "visible";
        phone_msg.style.color = "red";
        phone_msg.innerHTML = "Entered contact number is not valid.";
        event.preventDefault();
        phone.focus();
        return false;
    } else {
        phone_msg.style.visibility = "hidden";
        phone.style = "none";
    }

    if (email.value === "") {
        email.style.borderColor = "red";
        email_msg.style.visibility = "visible";
        email_msg.style.color = "red";
        email_msg.innerHTML = "Please enter your email address.";
        event.preventDefault();
        email.focus();
        return false;
    } else if (!(reg.test(email.value))) {
        email.style.borderColor = "red";
        email_msg.style.visibility = "visible";
        email_msg.style.color = "red";
        email_msg.innerHTML = "Entered email id is not valid.";
        event.preventDefault();
        email.focus();
        return false;
    } else {
        email_msg.style.visibility = "hidden";
        email.style = "none";
    }

    if (reemail.value === "") {
        reemail.style.borderColor = "red";
        reemail_msg.style.visibility = "visible";
        reemail_msg.style.color = "red";
        reemail_msg.innerHTML = "Please re-enter your email address.";
        event.preventDefault();
        reemail.focus();
        return false;
    } else if (!(reg.test(reemail.value))) {
        reemail.style.borderColor = "red";
        reemail_msg.style.visibility = "visible";
        reemail_msg.style.color = "red";
        reemail_msg.innerHTML = "Re-entered email address is not valid.";
        event.preventDefault();
        reemail.focus();
        return false;
    } else if ((email.value).localeCompare(reemail.value) !== 0) {
        email.style.borderColor = "red";
        reemail.style.borderColor = "red";
        reemail_msg.style.visibility = "visible";
        reemail_msg.style.color = "red";
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
        password.style.borderColor = "red";
        password_msg.style.visibility = "visible";
        password_msg.style.color = "red";
        password_msg.innerHTML = "Please enter your password.";
        event.preventDefault();
        password.focus();
        return false;
    } else {
        password_msg.style.visibility = "hidden";
        password.style = "none";
    }

    if (repassword.value === "") {
        repassword.style.borderColor = "red";
        repassword_msg.style.visibility = "visible";
        repassword_msg.style.color = "red";
        repassword_msg.innerHTML = "Please re-enter your password.";
        event.preventDefault();
        repassword.focus();
        return false;
    } else if (!((password.value) === (repassword.value))) {
        password.style.borderColor = "red";
        repassword.style.borderColor = "red";
        repassword_msg.style.visibility = "visible";
        repassword_msg.style.color = "red";
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
        sechoice.style.borderColor = "red";
        sechoice_msg.style.visibility = "visible";
        sechoice_msg.style.color = "red";
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
            sans.style.borderColor = "red";
            sans_msg.style.visibility = "visible";
            sans_msg.style.color = "red";
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
            scr.style.borderColor = "red";
            own_ques_msg.style.visibility = "visible";
            own_ques_msg.style.color = "red";
            own_ques_msg.innerHTML = "Please create your own security question.";
            event.preventDefault();
            scr.focus();
            return false;
        } else {
            own_ques_msg.style.visibility = "hidden";
            scr.style = "none";
        }
        if (own_sans.value === "") {
            own_sans.style.borderColor = "red";
            own_ans_msg.style.visibility = "visible";
            own_ans_msg.style.color = "red";
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

document.getElementById("mentor-security-question").addEventListener("change", function(event) {
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

// document.getElementById("mentor-signup-email").addEventListener('keyup', function() {

//     let email = document.getElementById("mentor-signup-email");
//     let msg = document.getElementById("signup-email-validate");
//     if (!(reg.test(email.value))) {
//         email.style.border = "red";
//         msg.style.visibility = "visible";
//         msg.style.color = "red";
//         msg.innerHTML = "Entered email address does not match with the globally preferred email pattern";
//         email.focus();
//         return false;
//     } else {
//         msg.style.visibility = "hidden";
//         email.style = "none";
//         // document.location.reload(true);
//     }
//     return true;
// });

/*--------------------------------------Ajax------------------------------------*/

// document.getElementById("mentor-security-question").addEventListener("change", function(event) {
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
//                     document.getElementById("mentor-signup-input").innerHTML = val;
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
//                     document.getElementById("mentor-signup-input").innerHTML = val;
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