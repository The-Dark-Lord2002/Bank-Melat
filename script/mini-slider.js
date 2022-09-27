play();
document.getElementById("mini-slider").onmouseover = function () {
    pause()
}
document.getElementById("mini-slider").onmouseout = function () {
    play();
}
//چون - تو اسکریپت فاصله میندازه
var r;
function play() {
    r = setInterval("go_right2()", 2500)
}
function pause() {
    clearInterval(r)
}


pos3 = 0;

right.onclick = go_right2;
function go_right2() {
    if (pos3 > -150) {
        pos3 = pos3 - 25;
        gallery.style.left = pos3 + "%";
    } else if (pos3 == -150) {
        pos3 = 0;
        gallery.style.left = pos3 + "%";
    }
}

left.onclick = function () {
    if (pos3 < 0) {
        pos3 = pos3 + 25;
        gallery.style.left = pos3 + "%";
    } else if (pos3 == 0) {
        pos3 = -225;
        gallery.style.left = pos3 + "%";
    }
}

