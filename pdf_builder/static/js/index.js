let current_data = 0;
let loading_container = document.getElementById("preview-loading-container");
let preview = document.getElementById("preview");

Array.from(document.getElementsByClassName("input_form")).forEach(input => {
    input.addEventListener("change", e => {
        let data_name = e.target.id;
        let value = e.target.value;
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