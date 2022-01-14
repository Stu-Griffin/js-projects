const FrontendMarathon = ["01","02","03","04","05"];
const HWCursorBasic = ["HW6","HW12","HW14"];
const HWCursorAdvanced = ["HW9","HW12"];
const a = document.querySelector("article");
(function showProjects(amounOfProjects) {
    for(let i = 0; i < amounOfProjects; i++) {
        var aElement = document.createElement("a");
        var divElement = document.createElement("div");
        aElement.classList.add("btn-3d");
        aElement.classList.add("yellow");
        divElement.classList.add("btn-container");
    }
})(10)