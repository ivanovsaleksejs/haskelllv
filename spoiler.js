var triggerSpoiler = function(e) {
    var elem = e.target
    if (elem.tagName != "PRE") {
        elem = elem.parentNode
    }

    hasClass(elem, "revealed") ? removeClass(elem, "revealed") : addClass(elem, "revealed")
    hasClass(elem, "hidden") ? removeClass(elem, "hidden") : addClass(elem, "hidden")
}

window.addEventListener("load", function() {
    var spoilers = document.getElementsByClassName("spoiler")

    for (var i = 0; i < spoilers.length; i++) {
        var e = spoilers[i]
        e.firstChild.addEventListener("click", triggerSpoiler)
    }

    codes = document.getElementsByTagName('code')

    for (var e=0; e<codes.length; e++) {
        hljs.highlightBlock(codes[e]);
    }
})
