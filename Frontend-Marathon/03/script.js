const upBtn = document.querySelector(".up-button");
const downBtn = document.querySelector(".down-button");

const sidebar = document.querySelector(".sidebar");
const sidebars = sidebar.querySelectorAll("div");

const mainSlide = document.querySelector(".main-slide");
const mainSlides = mainSlide.querySelector("div");

sidebar.style.top = `-${(sidebars.length - 1)*100}vh`;

let slideCount = 0;

upBtn.addEventListener("click", () => {
    changeSlides("up");
});
downBtn.addEventListener("click", () => {
    changeSlides("down");
});
document.addEventListener("keydown", event => {
    if(event.key === "ArrowUp") {
        changeSlides("up"); 
    } else if(event.key === "ArrowDown") {
        changeSlides("down");
    }
})

function changeSlides(direction) {
    if(direction === "up") {
        slideCount++
        if(slideCount === sidebars.length) {
            slideCount = 0;
        }
    } else if(direction === "down") {
        slideCount--
        if(slideCount < 0) {
            slideCount = sidebars.length - 1;
        }
    }
    mainSlide.style.transform = `translateY(-${slideCount * 100}vh)`
    sidebar.style.transform = `translateY(${slideCount * 100}vh)`
}