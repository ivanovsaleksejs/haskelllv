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
        removeClass(currentSlide, "left")
        dir && addClass(currentSlide, "rightside")
        dir || addClass(currentSlide, "leftside")
        currentSlide = next
        dir || removeClass(currentSlide, "rightside")
        dir && removeClass(currentSlide, "leftside")
        addClass(currentSlide, "active" + (dir ? "" : " left"))
    }
}

var prevSlide = function(){
    slideStep(false)    
}

var nextSlide = function(){
    slideStep(true)    
}

var displayTooltip = function(event) {
    var elem = document.getElementById("tooltip_" + this.id)
    elem.style.left = event.clientX
    elem.style.top = event.clientY
    addClass(elem, "visible")
    removeClass(elem, "hidden")
}

var hideTooltip = function() {
    var elem = document.getElementById("tooltip_" + this.id)
    addClass(elem, "hidden")
    removeClass(elem, "visible")
}

window.onload = function() {
    document.getElementById("prev").addEventListener("click", prevSlide, false)
    document.getElementById("next").addEventListener("click", nextSlide, false)

    var tooltips = document.getElementsByClassName("def")
    for (var i = 0; i < tooltips.length; i++) {
        var e = tooltips[i]
        e.addEventListener("mouseover", displayTooltip)
        e.addEventListener("mouseout", hideTooltip)
    }

    currentSlide = document.getElementsByClassName("slide active")[0]

}
