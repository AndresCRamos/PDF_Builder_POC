let current_data = 0;
let loading_container = document.getElementById("preview-loading-container");
let preview = document.getElementById("preview");

let matchList = ["data_name", "data_last_name"];

Array.from(document.getElementsByClassName("input_form")).forEach(input => {
    input.addEventListener("change", e => {
        console.log(e.target);
        let data_name = e.target.id
        let value = e.target.value
        if(!value) {
            value = "_____________"
        }
        fillData("data_"+data_name, value)
    })
})

document.getElementById("name_form").addEventListener("submit", function (e) {
    e.preventDefault();
    plusSlides(1);
})

function fillData(dataName, data) {
    let replaces = Array.from(document.getElementsByClassName(dataName))
    console.log(dataName);
    console.log(replaces);
    replaces.forEach(match => {
        match.innerText = data;
    })
}