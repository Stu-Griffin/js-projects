function randomColor() {
  return (
    "#" + (Math.random().toString(16) + "000000").substring(2, 8).toUpperCase()
  );
}
function setColor() {
  const elementChildrens = document.querySelectorAll(".block");
  for (let i = 0; i < elementChildrens.length; i++) {
    elementChildrens[i].style.backgroundColor = `${randomColor()}`;
  }
}
document.getElementById("setColorButton").addEventListener("click", () => {
  const elementChildrens = document.querySelectorAll(".block");
  for (let i = 0; i < elementChildrens.length; i++) {
    elementChildrens[i].style.backgroundColor = `${randomColor()}`;
  }
})
let interval;
let button = false;
document.getElementById("run").addEventListener("click", () => {
  if(button) {
    clearInterval(interval);
    document.getElementById("run").innerHTML = "RUN";
    button = false;
  } else {
    interval = setInterval(() => setColor(), 1000);
    document.getElementById("run").innerHTML = "STOP";
    button = true;
  }
})
console.log("l")