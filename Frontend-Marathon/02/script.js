const item = document.querySelector(".item");
const placeholders = document.querySelectorAll(".placeholder");

item.addEventListener("dragstart", dragstart)
item.addEventListener("dragend", dragend)

for(const placeholder of placeholders) {
    placeholder.addEventListener("dragover", dragover)
    placeholder.addEventListener("dragenter", dragenter)
    placeholder.addEventListener("dragleave", dragleave)
    placeholder.addEventListener("drop", drop)

}

function dragstart() {
    item.classList.add("drag-start")
}
function dragend() {
    item.classList.remove("drag-start")
}
function dragover(event) {
    event.preventDefault()
}
function dragenter(event) {
    event.target.classList.add("enter-in-box")
}
function dragleave(event) {
    event.target.classList.remove("enter-in-box")
}
function drop(event) {
    event.target.append(item)
    event.target.classList.remove("enter-in-box")
}