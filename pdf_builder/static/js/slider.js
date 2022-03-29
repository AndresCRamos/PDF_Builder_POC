var slideIndex = 1;
showSlides(slideIndex);

document.addEventListener('DOMContentLoaded', function() {
    currentSlide(1);
}, false);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function resetHighlight(){
    let matches = Array.from(document.getElementsByClassName("data"));
    matches.forEach(match => {
        match.style.backgroundColor = "transparent";
    })
}

function highlightReplace(replaceList) {
    let color_list = ["red", "blue", "yellow", "green"]
    let color_pos = 0;
    replaceList.forEach(replaceObj => {
        let matches = Array.from(document.getElementsByClassName(replaceObj));
        matches.forEach(match => {
            match.style.backgroundColor = color_list[color_pos];
        })
    color_pos++;
    });
}

function showSlides(n) {
    let matchPerSlide = [
        ["data_name", "data_last_name"],
        ["data_document"]
    ]
    resetHighlight();
    highlightReplace(matchPerSlide[slideIndex-1]);
    var i;
    var slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    if (slides[slideIndex-1] != undefined) {
        slides[slideIndex-1].style.display = "block";
        let active_dots = document.getElementsByClassName("dot-n-"+slideIndex);
        for(let i = 0; i< active_dots.length; i++){
            active_dots[i].className += " active";
        }
    }
}