function getRandomChines(length) {
  return new Promise((resolve) => {
    let result = [];
    let character = String(Date.now()).slice(-5);
    let i = 0;
    while(i < length) {
      character += 1;
      result.push(String.fromCharCode(character));
      i++
    }
    setTimeout(() => resolve(result.join("")), length * 50)
  })
}
function event() {
  document.getElementById("character-btn").addEventListener("click", () => {
    getRandomChines(5).then((res) => {
      document.getElementById("answer").innerHTML = res;
    })
  })
}
const btnevent = event() 
export default btnevent