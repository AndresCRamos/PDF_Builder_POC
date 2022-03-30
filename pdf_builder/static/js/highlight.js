function resetHighlight(){
    let matches = Array.from(document.getElementsByClassName("data"));
    matches.forEach(match => {
        match.style.backgroundColor = "transparent";
        match.classList.remove("match");
    })
}

function highlightReplace(slideForm) {
    let color_list = [
        "lightcoral", 
        "lightblue", 
        "lightgray", 
        "lightgreen"
    ]

    let inputs = Array.from(slideForm.getElementsByClassName("input_form"));
    
    let color_pos = 0;
    
    inputs.forEach(input => {
        let replaced = "data_"+input.id;
        let input_container = input.parentElement;
        input_container.style.backgroundColor= color_list[color_pos];
        let matches = Array.from(document.getElementsByClassName(replaced));
        matches.forEach(match => {
            match.style.backgroundColor = color_list[color_pos];
            match.classList.add("match");
        })
        color_pos++;
    })
}