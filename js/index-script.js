/*Jquery 
$('.btn-customized').on('click', function() {

    if (!($(this).hasClass('paused'))) {
        $('.carousel').carousel('pause');
        $('.btn-customized').toggleClass('paused');
        // $('.btn-customized i').removeClass('fa-play').addClass('fa-pause');
        $(this).blur();
    } else {
        $('.carousel').carousel('cycle');
        $('.btn-customized').toggleClass('paused');
        // $('.btn-customized i').removeClass('fa-pause').addClass('fa-play');
        $(this).blur();
    }

});

*/

$('.carousel').carousel({
    interval: 5000
});

$(document).ready(function() {
    $('#u-signin,#u-signup,#u-m,#u-a,#indicator-2,#indicator-3').click(function() {
        $('.carousel').carousel('cycle');
    });
});
$(document).ready(function() {
    $('#user-search-green-button-form').submit(function() {
        $('.carousel').carousel('cycle');
        // window.location.replace = "../WebContent/user-search-result.html";
    });
});

document.getElementById("user-search-green-button-form").style.visibility = "hidden";
document.getElementById("user-search").addEventListener("click", function() {

    $('.carousel').carousel('pause');

    let search = document.getElementById("user-search-green-button-form");
    if (search.style.visibility === "hidden") {
        search.style.visibility = "visible";
    } else if (search.style.visibility === "visible") {
        search.style.visibility = "hidden";
    }

});