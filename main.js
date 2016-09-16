var hasClass = function(e, name) {
    return e.className.indexOf(name) != -1
}

var addClass = function(e, name) {
    e.className += " " + name
}
var removeClass = function(e, name) {
    e.className = e.className.replace(name,"")
}
