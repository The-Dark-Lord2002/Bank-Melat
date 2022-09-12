pos3 = 0;

right.onclick = function() {
    if (pos3 > -225) {
        pos3 = pos3 - 25;
        gallery.style.left = pos3 + "%";
    } else if (pos3 == -225) {
        pos3 = 0;
        gallery.style.left = pos3 + "%";
    }
}

left.onclick = function() {
    if (pos3 < 0) {
        pos3 = pos3 + 25;
        gallery.style.left = pos3 + "%";
    } else if (pos3 == 0) {
        pos3 = -225;
        gallery.style.left = pos3 + "%";
    }
}