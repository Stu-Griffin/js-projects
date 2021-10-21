const startBtn = document.querySelector(".start");
const screens = document.querySelectorAll(".screen");
const timeList = document.querySelector(".time-list");
const timePlace = document.querySelector("#time");
const board = document.querySelector("#board");
const timeSector = document.querySelector("h3");
const colors = ['yellow', 'red', 'violet', 'green', 'blue']
let time = 0;
let score = 0;
startBtn.addEventListener("click", (event) => {
    event.preventDefault()
    screens[0].classList.add("up")
})
timeList.addEventListener("click", (event) => {
    if(event.target.classList.contains("time-btn")) {
        time = parseInt(event.target.getAttribute("data"))
        screens[1].classList.add("up")
        startGame()
    }
})
board.addEventListener("click", event => {
    if(event.target.classList.contains("circle")) {
        event.target.remove()
        score++
        getRandomCircle()
    }
})




function startGame() {
    setInterval(decreaseTime, 1000)
    getRandomCircle()
    setTime(time)
}
function decreaseTime() {
    if(time === 0) {
        finishGame()
    } else {
        let current = --time;
        if(current < 10) {
            current = `0${current}`
        }
        setTime(current)
    }
}
function setTime(value) {
    timePlace.innerHTML = `00:${value}`
}
function finishGame() {
    timeSector.innerHTML=" ";
    board.innerHTML=`<h1>Score: ${score}</h1>`
}
function getRandomCircle() {
    const circle = document.createElement("div")
    const boardSize = board.getBoundingClientRect()
    const size = randomNumber(10, 60)
    const x = randomNumber(0, boardSize.width - size)
    const y = randomNumber(0, boardSize.height - size)
    circle.classList.add("circle")
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`
    circle.style.backgroundColor = `${colors[randomNumber(0, 4)]}`
    board.append(circle)
}
function randomNumber(min, max) {
    // получить случайное число от (min-0.5) до (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand)
}