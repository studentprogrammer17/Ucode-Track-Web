let check = 0;

function transformation() {
    let hero = document.getElementById("hero");
    let lab = document.getElementById("lab");

    if(check == 0) {
        hero.innerHTML = "Hulk";
        lab.style.backgroundColor = "#70964b";
        hero.style.fontSize = "130px"
        hero.style.letterSpacing = "6px"
        check = 1;
        return;
    }
    else if(check == 1) {
        hero.innerHTML = "Bruce Banner";
        lab.style.backgroundColor = "#ffb300";
        hero.style.fontSize = "60px"
        hero.style.letterSpacing = "2px"
        check = 0;
        return;
    }
}

