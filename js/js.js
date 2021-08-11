var hamburger = document.getElementsByClassName("hamburger");
    for (var i = 0; i < hamburger.length; i++) {
        hamburger[i].addEventListener('click', function() {
        this.classList.toggle("is-active");
        }, false);
    }
(function() {
var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                            window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
window.requestAnimationFrame = requestAnimationFrame;
})();

$('.hamburger').on('click', () => {
    $('.nav-list .nav').slideToggle();
    $('.nav-list .nav').addClass("show-nav");
});
$('.hamburger').click(function(){
    $('nav').toggleClass("background");
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 12 || document.documentElement.scrollTop > 12) {
    document.getElementById("navbar-scroll").style.background = "rgba(0, 0, 0, 0.9)";
  } else {
    document.getElementById("navbar-scroll").style.top = "0px";
    document.getElementById("navbar-scroll").style.background = "rgba(0, 0, 0, 0)";
  }
}

var scrollToTopBtn = document.querySelector(".scrollToTopBtn")
var rootElement = document.documentElement
var TOGGLE_RATIO = 0.80

function handleScroll() {
  // do something on scroll
  var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
  if ((rootElement.scrollTop / scrollTotal) > TOGGLE_RATIO) {
    //show button
    scrollToTopBtn.classList.add("showBtn")
  } else {
    //hide button
    scrollToTopBtn.classList.remove("showBtn")
  }
}

function scrollToTop() {
  //scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}
scrollToTopBtn.addEventListener("click", scrollToTop)
document.addEventListener("scroll", handleScroll)

