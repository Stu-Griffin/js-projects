const container = document.querySelector("#board");
const SQUARES_AMOUNT = 504;
for(let i = 0; i < SQUARES_AMOUNT; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.addEventListener("mouseover", () => {
        setColor(square);
    })
    square.addEventListener("mouseleave", () => {
        removeColor(square);
    })
   container.append(square);
}
function randomInteger(min, max) {
    // получить случайное число от (min-0.5) до (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}
function setColor(el) {
    el.style.backgroundColor = `#${randomInteger(1000, 9999)}`;
}
function removeColor(el) {
    setTimeout(() => {
        el.style.backgroundColor = "rgb(94, 94, 94)";
    }, 400)
}