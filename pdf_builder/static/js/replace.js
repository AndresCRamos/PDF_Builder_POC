let current_data = 0;
let loading_container = document.getElementById("preview-loading-container");
let preview = document.getElementById("preview");

Array.from(document.getElementsByClassName("input_form")).forEach(input => {
    input.addEventListener("keyup", e => {
        let data_name = input.id;
        let value = input.value;
        if(!value) {
            value = "_____________";
        }
        fillData("data_"+data_name, value);
    })
})

function fillData(dataName, data) {
    let replaces = Array.from(document.getElementsByClassName(dataName))
    replaces.forEach(match => {
        match.innerText = data;
    })
}