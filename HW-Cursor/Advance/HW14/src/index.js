import "./HW/style.css"
//HW1
import resultFromHW1 from "./HW/HW1/js.js"
let one = ""
for(let i = 0; i < resultFromHW1.length; i++) {
    one += `${resultFromHW1[i]} / `
}
document.getElementById("article").innerHTML = `HW1: ${one}`

//HW2
import resultFromHW2 from "./HW/HW2/js.js"
document.getElementById("second-article").innerHTML = `HW2: ${resultFromHW2}`

//HW3
import resultFromHW3 from "./HW/HW3/js.js"
let two = ""
for(let i = 0; i < resultFromHW3.length; i++) {
    two += `${resultFromHW3[i]} / `
}
document.getElementById("third-article").innerHTML = `HW3: ${two}`

//HW4
import resultFromHW4 from "./HW/HW4/js.js"
let three = ""
for(let i = 0; i < resultFromHW4.length; i++) {
    three += `${resultFromHW4[i]} / `
}
document.getElementById("fourth-article").innerHTML = `HW4: ${three}`

//HW5
import resultFromHW5 from "./HW/HW5/js.js"
let four = ""
for(let i = 0; i < resultFromHW5.length; i++) {
    four += `${resultFromHW5[i]} / `
}
document.getElementById("fiveth-article").innerHTML = `HW5: ${four}`

//HW6
import resultFromHW6 from "./HW/HW6/js.js"
document.getElementById("sixth-article").innerHTML = `HW6: in console`
console.log("HW6: ", resultFromHW6)

//HW7
import resultFromHW7 from "./HW/HW7/js.js"
document.getElementById("seventh-article").innerHTML = `HW7: in console`
console.log("HW7: ", resultFromHW7)

//HW8
import resultFromHW8 from "./HW/HW8/js.js"
document.getElementById("eighth-article").innerHTML = `HW8: in console`
console.log("HW8: ", resultFromHW8)

//HW10
import {eventSetColor} from "./HW/HW9/js.js"
import {eventChanger} from "./HW/HW9/js.js"
eventSetColor
eventChanger

//HW10
import {btnEvent} from "./HW/HW10/js.js"
import keydownFunction from "./HW/HW10/js.js"
btnEvent
keydownFunction

//HW11
import resultFromHW11 from "./HW/HW11/js.js"
resultFromHW11

//HW12
import "./HW/HW12/style.css"
import {characters} from "./HW/HW12/js.js"
import {planets} from "./HW/HW12/js.js"
import {nextPlanets} from "./HW/HW12/js.js"
import {prevPlanets} from "./HW/HW12/js.js"
characters
planets
nextPlanets
prevPlanets

//HW13
import {show} from "./HW/HW13/js.js"
import {big} from "./HW/HW13/js.js"
import {low} from "./HW/HW13/js.js"
show
big
low