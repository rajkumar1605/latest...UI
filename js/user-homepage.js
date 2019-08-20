// document.getElementById("sidenav-toggler-icon").addEventListener("click", function() {
//     document.getElementById("available-courses").style.width = "375px";
// });

// document.getElementById("close-side-nav-icon").addEventListener("click", function() {
//     document.getElementById("available-courses").style.width = "0";
// });


$(document).ready(function() {
    $('.toast').toast('show');
});
$(document).ready(function() {
    $("#user-notify-button").click(function() {
        $('.toast').toast('show');
    });
});

// document.getElementById("user-updates-progress").addEventListener("click", function(event) {
//     // console.log(document.getElementById("customRange").value);
//     console.log(this.document.getElementById("customRange").value);
// });

function slideUpdate(thsbutton) {
    // console.log(thsbutton.parentNode.parentNode);
    // console.log(thsbutton.parentNode.parentNode.childNodes); will return Nodelist in browser
    // console.log(thsbutton.parentNode.parentNode.childNodes[1].childNodes[15].childNodes[3]);
    // console.log(thsbutton.parentNode.parentNode.childNodes[1].childNodes[10].childNodes[1]);
    // console.log(progress.style.width);

    let slidevalue = (thsbutton.parentNode.parentNode.childNodes[1].childNodes[15].childNodes[3].value);
    let progress = thsbutton.parentNode.parentNode.childNodes[1].childNodes[10].childNodes[1];
    let check = progress.style.width;
    if (slidevalue == 0) {
        if ((check != "25%") && (check != "50%") && (check != "75%") && (check != "100%")) {
            progress.style.width = "0%";
        }
    } else if (slidevalue == 1) {
        if ((check != "50%") && (check != "75%") && (check != "100%")) {
            progress.style.width = "25%";
        }
    } else if (slidevalue == 2) {
        if ((check != "75%") && (check != "100%")) {
            progress.style.width = "50%";
        }
    } else if (slidevalue == 3) {
        if ((check != "100%")) {
            progress.style.width = "75%";
        }
    } else if (slidevalue == 4) {
        progress.style.width = "100%";
    }

}

document.getElementById("sidenav-toggler-icon").addEventListener("click", function() {
    document.getElementById("available-courses").style.width = "375px";
});

document.getElementById("close-side-nav-icon").addEventListener("click", function() {
    document.getElementById("available-courses").style.width = "0";
});