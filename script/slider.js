pos = 0;

function move(i) {
    pos = -100 * i;
    gal.style.left = pos + "%";

    // document.getElementsByClassName("bot" + i)[0].style.marginTop = "0px";
    //document.getElementsByClassName("bbc" + i)[0].style.backgroundColor = "orange";

}
/*
document.getElementsByClassName("bbc" + i).onclick {
    if (pos = -400) {
        document.getElementsByClassName("bbc" + i)[0].style.backgroundColor = "orange";
    }
}*/
right1.onclick = function() {
    if (pos > -700) {
        pos = pos - 100;
        gal.style.left = pos + "%";


    } else if (pos == -700) {
        pos = 0;
        gal.style.left = pos + "%";
    }
}

left1.onclick = function() {
        if (pos < 0) {
            pos = pos + 100;
            gal.style.left = pos + "%";
        } else if (pos == 0) {
            pos = -700;
            gal.style.left = pos + "%"
        }
    }
    /*****************************/