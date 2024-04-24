$(window).scroll(function() {
    if ($(window).scrollTop() > 130) {
        // document.getElementById("navbar").style.opacity = "1";
        document.getElementById("navbar").style.display = "flex";
        document.getElementById("navbar").style.transition = ".3s";
    }
    else {
        // document.getElementById("navbar").style.opacity = "0";
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



// CAROUSEL

// var $owl = $('.owl-carousel');

// $owl.children().each( function( index ) {
//   $(this).attr( 'data-position', index ); // NB: .attr() instead of .data()
// });

// $owl.owlCarousel({
//   center: true,
//   loop: true,
//   items: 5,
// });

// $(document).on('click', '.owl-item>div', function() {
//   // see https://owlcarousel2.github.io/OwlCarousel2/docs/api-events.html#to-owl-carousel
//   var $speed = 300;  // in ms
//   $owl.trigger('to.owl.carousel', [$(this).data( 'position' ), $speed] );
// });