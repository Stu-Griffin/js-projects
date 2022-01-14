const table = document.querySelector(".table");
const array = [ 
                [0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0],
];


render(array);

document.querySelectorAll(".block").forEach(el => {
    el.addEventListener("click", () => {
        removeAll(document.querySelectorAll(".block"));
        el.classList.add("withFigure");
        game(el);
    })
})




function removeAll(arr) {
    arr.forEach(el => {
        el.classList.remove("withFigure");
        el.removeAttribute("style");
    })
}

function logic(arr, x, y) {
    arr.forEach(el => {
        if(el.dataset.x == x && el.dataset.y == y) {
            el.style.backgroundColor = "green";
        }
    })
}

function game(el) {
    x = el.dataset.x;
    y = el.dataset.y;
    const blocks = document.querySelectorAll(".block");
    if((+x-2) < 8 && (+y+1) < 8 && (+x-2) >= 0 && (+y+1) >= 0) {
        logic(blocks, (+x-2).toString(), (+y+1).toString())
    }
    if((+x-2) < 8 && (+y-1) < 8 && (+x-2) >= 0 && (+y-1) >= 0) {
        logic(blocks, (+x-2).toString(), (+y-1).toString())
    }

    if((+x+2) < 8 && (+y+1) < 8 && (+x+2) >= 0 && (+y+1) >= 0) {
        logic(blocks, (+x+2).toString(), (+y+1).toString())
    }
    if((+x+2) < 8 && (+y-1) < 8 && (+x+2) >= 0 && (+y-1) >= 0) {
        logic(blocks, (+x+2).toString(), (+y-1).toString())
    }

    if((+x+1) < 8 && (+y+2) < 8 && (+x+1) >= 0 && (+y+2) >= 0) {
        logic(blocks, (+x+1).toString(), (+y+2).toString())
    }
    if((+x+1) < 8 && (+y-2) < 8 && (+x+1) >= 0 && (+y-2) >= 0) {
        logic(blocks, (+x+1).toString(), (+y-2).toString())
    }

    if((+x-1) < 8 && (+y+2) < 8 && (+x-1) >= 0 && (+y+2) >= 0) {
        logic(blocks, (+x-1).toString(), (+y+2).toString())
    }
    if((+x-1) < 8 && (+y-2) < 8 && (+x-1) >= 0 && (+y-2) >= 0) {
        logic(blocks, (+x-1).toString(), (+y-2).toString())
    }
}

function render(arr) {
    let k = 0;
    for(let i = 0; i < arr.length; i++) {
        let row = document.createElement("article");
        row.classList.add("row");
        for(let j = 0; j < arr[i].length; j++) {
            let block = document.createElement("div");
            block.setAttribute("data-x", i);
            block.setAttribute("data-y", j);
            block.classList.add("block");
            (k % 2) ? block.classList.add("black") : block.classList.add("white");
            row.appendChild(block);
            k++
        } 
        k++
        table.appendChild(row);
    }
}