var slideIndex = 1;
showSlides(slideIndex);

document.addEventListener('DOMContentLoaded', function() {
    currentSlide(1);
    addButtons();
}, false);

function addNextButton(currentSlide){
    let button = document.createElement("button");
    button.setAttribute("type", "button");
    button.innerText = "Siguiente";
    button.addEventListener("click", e => {
        plusSlides(1)
    })
    currentSlide.appendChild(button)
}

function addPrevButton(currentSlide){
    let button = document.createElement("button");
    button.setAttribute("type", "button");
    button.innerText = "Volver";
    button.addEventListener("click", e => {
        plusSlides(-1)
    })
    currentSlide.appendChild(button)
}

function addButtons(){
    var slides = document.getElementsByClassName("slide");
    for (let i = 0; i< slides.length; i++) {
        if(i!=0) {
            addPrevButton(slides[i])
        }
        if(i!=slides.length-1) {
            addNextButton(slides[i])
        }
    }
}

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

function highlightReplace(slideForm) {
    let color_list = ["red", "blue", "yellow", "green"]
    let inputs = Array.from(slideForm.getElementsByClassName("input_form"));
    
    let replaceList = [];
    inputs.forEach(input => {
        replaceList.push("data_"+input.id)
    })

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
    var i;
    var slides = document.getElementsByClassName("slide");
    resetHighlight();
    highlightReplace(slides[slideIndex-1]);
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    if (slides[slideIndex-1] != undefined) {
        slides[slideIndex-1].style.display = "block";
    }
}