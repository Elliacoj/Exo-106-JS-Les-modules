export function newDiv() {
    let div = document.createElement("div");
    div.style.width = "100%";
    div.style.height = "200px";
    div.style.backgroundColor = "black";

    return div
}



export function newInp(typeInput) {
    let input = document.createElement("input");
    input.type = typeInput;
    input.value ="42";
    input.id = "newInput" + typeInput;

    return input
}

export function newLabel(typeInput) {
    let label = document.createElement("label");
    label.id = "newInput" + typeInput;
    label.innerHTML = typeInput;
    return label
}