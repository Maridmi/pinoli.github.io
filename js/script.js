$(window).scroll(function() {
    if ($(window).scrollTop() > 130) {
        // document.getElementById("navbar").style.opacity = "1";
        document.getElementById("iconfix").style.opacity = "1";
        document.getElementById("navbar").style.display = "flex";
        document.getElementById("navbar").style.transition = ".3s";
    }
    else {
        // document.getElementById("navbar").style.opacity = "0";
        document.getElementById("iconfix").style.opacity = "0";
        document.getElementById("navbar").style.display = "none";
        document.getElementById("navbar").style.top = "-80px";
        document.getElementById("navbar").style.transition = ".3s";
    }
});


let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-80px";
    }
    prevScrollpos = currentScrollPos;
}


$(document).ready(function(){
$("a").on('click', function(event) {
    if (this.hash !== "") {
    event.preventDefault();

    let hash = this.hash;

    $('html, body').animate({
        scrollTop: $(hash).offset().top
    }, 800, function(){
        window.location.hash = hash;
    });
    }
});
});

function navMobile() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function navMobileFix() {
    var x = document.getElementById("myLinksFix");
    if (x.style.display === "flex") {
        x.style.display = "none";
    } else {
        x.style.display = "flex";
    }
}
