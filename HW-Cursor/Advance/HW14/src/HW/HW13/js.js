const button = document.getElementById("generator-btn");
const up = document.getElementById("up");
const down = document.getElementById("down");
const result = document.getElementById("result");


function* firstGenerator() {
  let i = 0;
  while (true) {
    yield i++;
  }
}
const firstGen = firstGenerator();
function first() {
  button.addEventListener("click", () => {
    result.innerHTML = `${firstGen.next().value}`;
  });
}
let fontSize = 16;
let a;
function* plusSize() {
  while (a === true) {
    yield (fontSize += 2);
  }
}
function* minusSize() {
  while (a === false) {
    yield (fontSize -= 2);
  }
}
let upGen = plusSize();
let downGen = minusSize();
function upGenFunc() {
  up.addEventListener("click", () => {
      a = true;
      result.style.fontSize = `${upGen.next().value}px`;
  });
}
function downGenFunc() {
  down.addEventListener("click", () => {
      a = false;
      result.style.fontSize = `${downGen.next().value}px`;
  });
}
export const show = first();
export const big = upGenFunc();
export const low = downGenFunc();