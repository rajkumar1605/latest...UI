document.getElementById("sidenav-toggler-icon").addEventListener("click",function(){
    document.getElementById("available-courses").style.width = "375px";
});

document.getElementById("close-side-nav-icon").addEventListener("click",function(){
    document.getElementById("available-courses").style.width = "0";
});
