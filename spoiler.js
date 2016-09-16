var triggerSpoiler = function(e) {
    var elem = e.target
    hasClass(elem, "revealed") ? removeClass(elem, "revealed") : addClass(elem, "revealed")
}

window.addEventListener("load", function() {
    var spoilers = document.getElementsByClassName("spoiler")

    for (var i = 0; i < spoilers.length; i++) {
        var e = spoilers[i]
        e.addEventListener("click", triggerSpoiler)
    }
})
