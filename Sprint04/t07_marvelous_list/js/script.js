let descrElephant = document.getElementById("greenElephantDescr");
let CaribbeanDescr = document.getElementById("CaribbeanDescr");
let KikorikiDescr = document.getElementById("KikorikiDescr");

function showGreenEleph() {
    KikorikiDescr.style.display = "none";
    CaribbeanDescr.style.display = "none";
    descrElephant.style.display = "contents";
}

function showCaribbean() {
    KikorikiDescr.style.display = "none";
    descrElephant.style.display = "none";
    CaribbeanDescr.style.display = "contents";
}

function showKikoriki() {
    descrElephant.style.display = "none";
    CaribbeanDescr.style.display = "none";
    KikorikiDescr.style.display = "contents";
}

