
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

$(window).scroll(function() {
    if ($(window).scrollTop() > 120) {
        document.getElementById("navbar").style.transition = ".3s";
    }
    else {
        document.getElementById("navbar").style.top = "-80px";
        document.getElementById("navbar").style.transition = ".3s";
    }
});

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