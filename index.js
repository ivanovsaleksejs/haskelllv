var currentSlide = null;

var addClass = function(e, name) {
    e.className += " " + name
}
var removeClass = function(e, name) {
    e.className = e.className.replace(name,"")
}

var slideStep = function(dir) {
    var next = dir ? currentSlide.nextElementSibling : currentSlide.previousElementSibling
    if (next != null) {
        removeClass(currentSlide, "active")
        currentSlide = next
        addClass(currentSlide, "active")
    }

}

var prevSlide = function(){
    slideStep(false)    
}

var nextSlide = function(){
    slideStep(true)    
}

window.onload = function() {
    document.getElementById("prev").addEventListener("click", prevSlide, false)
    document.getElementById("next").addEventListener("click", nextSlide, false)

    currentSlide = document.getElementsByClassName("slide active")[0]

}
