let slide_index = 1;  
displaySlideAuto();

function nextSlide(n) {
    displaySlides(slide_index += n);
}

function displaySlides(n) {  
    let slides = document.getElementsByClassName("showSlide");  
    if (n > slides.length) { slide_index = 1 }  
    if (n < 1) { slide_index = slides.length }  
    for (let i = 0; i < slides.length; i++) {  
        slides[i].style.display = "none";  
    }  
    slides[slide_index - 1].style.display = "block";  
}  

function displaySlideAuto() {
    let slides = document.getElementsByClassName("showSlide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slide_index++;
    if (slide_index > slides.length) {
        slide_index = 1
    } 
    slides[slide_index - 1].style.display = "block";
    setTimeout(showSlideAuto, 3000);
}

