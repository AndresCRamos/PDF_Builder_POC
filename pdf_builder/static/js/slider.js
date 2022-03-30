let slideIndex = 1;

document.addEventListener('DOMContentLoaded', function() {
    currentSlide(1);
    addButtons();
}, false);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function addPreviewButton() {
    let button = document.createElement("button");
    button.setAttribute("type", "button");
    button.innerText = "Prevista";
    button.addEventListener("click", e => {
        resetHighlight();
    })

    buttonContainer =  Array.from(currentSlide.getElementsByClassName("button-container"))[0];
    buttonContainer.appendChild(button);
}


function addButtons(){
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i< slides.length; i++) {
        if(i!=0) {
            addPrevButton(slides[i])
        }
        if(i<slides.length-2) {
            addNextButton(slides[i])
        }
        if(i==slides.length-2) {
            addPreviewButton(slides[i])
        }
        if(i==slides.length-1) {
            addExportButton(slides[i])
        }
    }
}

function addNextButton(currentSlide){
    let button = document.createElement("button");
    button.setAttribute("type", "button");
    button.innerText = "Siguiente";
    button.addEventListener("click", e => {
        plusSlides(1)
    })

    buttonContainer =  Array.from(currentSlide.getElementsByClassName("button-container"))[0];
    buttonContainer.appendChild(button);
}

function addPrevButton(currentSlide){
    let button = document.createElement("button");
    button.setAttribute("type", "button");
    button.innerText = "Volver";
    button.addEventListener("click", e => {
        plusSlides(-1)
    })
    buttonContainer =  Array.from(currentSlide.getElementsByClassName("button-container"))[0];
    buttonContainer.appendChild(button);
}

function addPreviewButton(currentSlide){
    let button = document.createElement("button");
    button.setAttribute("type", "button");
    button.innerText = "Preview";
    button.addEventListener("click", e => {
        plusSlides(1)
    })
    buttonContainer =  Array.from(currentSlide.getElementsByClassName("button-container"))[0];
    buttonContainer.appendChild(button);
}

function addExportButton(currentSlide){
    let button = document.createElement("button");
    button.setAttribute("type", "button");
    button.innerText = "Exportar";
    button.addEventListener("click", e => {
        exportPDF();
    })
    buttonContainer =  Array.from(currentSlide.getElementsByClassName("button-container"))[0];
    buttonContainer.appendChild(button);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    resetHighlight();
    if (n != slides.length) { highlightReplace(slides[slideIndex-1]);}
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    if (slides[slideIndex-1] != undefined) {
        slides[slideIndex-1].style.display = "flex";
    }
}