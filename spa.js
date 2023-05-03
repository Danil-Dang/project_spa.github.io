// Nav Menu open
const toggleMenu = () =>
    document.body.classList.toggle("open");

// Nav Scroll
window.onscroll = function() {scrollFunction()};    
function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("header").classList.add("show");
    }
    else {
        document.getElementById("header").classList.remove("show");
    }
}