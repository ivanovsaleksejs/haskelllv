var summary = null;
var summaryTrigger = null;

var byId = document.getElementById.bind(document)

var displayTooltip = function(event) {
    var elem = byId("tooltip_" + this.id)
    elem.style.left = event.clientX+2
    elem.style.top = event.clientY+3
    addClass(elem, "visible")
    removeClass(elem, "hidden")
}

var hideTooltip = function() {
    var elem = byId("tooltip_" + this.id)
    addClass(elem, "hidden")
    removeClass(elem, "visible")
}

var changeSlide = function(e) {
    var elem = e.target
    if (elem.tagName == "LI") {
        elem = elem.firstChild
    }
    if (elem.tagName == "A") {
        if (!hasClass(elem, "nav_link")) {
            triggerSummary()
        }
        elem.click()
    }
}

var triggerSummary = function() {
    var active = hasClass(summaryTrigger, "active")
    if (active) {
        removeClass(summary, "visible")
        addClass(summary, "hidden")
        summaryTrigger.innerText = ">"
        removeClass(summaryTrigger, "active")
    }
    else {
        addClass(summary, "visible")
        removeClass(summary, "hidden")
        summaryTrigger.innerText = "<"
        addClass(summaryTrigger, "active")
    }
}

var closeSummary = function(e) {
    var elem = e.target
    if (elem.id !== "trigger_summary" && elem.id !== "summary" && hasClass(summaryTrigger, "active")) {
        triggerSummary()
    }
}

window.addEventListener("load", function() {

    summary = byId("summary")
    summaryTrigger = byId("trigger_summary")

    var tooltips = document.getElementsByClassName("def")

    for (var i = 0; i < tooltips.length; i++) {
        var e = tooltips[i]
        e.addEventListener("mouseover", displayTooltip)
        e.addEventListener("mouseout", hideTooltip)
    }

    slides = document.getElementsByClassName("slide")

    summaryTrigger.addEventListener("click", triggerSummary, false)

    summary.addEventListener("click", changeSlide)

    document.addEventListener("click", closeSummary);

    (function(i,s,o,g,r,a,m){
        i['GoogleAnalyticsObject']=r;
        i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)
        },
        i[r].l=1*new Date();
        a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];
        a.async=1;
        a.src=g;
        m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-83556742-1', 'auto');
    ga('send', 'pageview');

})
