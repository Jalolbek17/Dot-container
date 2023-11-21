const dot = document.querySelector(".dot");
const container = document.querySelector(".container");

var x = container.offsetWidth / 2;
var y = container.offsetHeight / 2;

dot.style.cssText = `left: ${x}px; top: ${y}px;`;

document.body.addEventListener("keydown", event => {
    switch (event.key) {
        case "ArrowLeft" :
            if (x > 0) {
                dot.style.left = `${x = x - 5}px`;
            }
            break;
        case "ArrowUp" :
            if (y > 0) {
                dot.style.top = `${y = y - 5}px`;
            }
            break;
        case "ArrowRight" :
            if (x < container.offsetWidth - dot.offsetWidth) {
                dot.style.left = `${x = x + 5}px`;
            }
            break;
        case "ArrowDown" :
            if (y < container.offsetHeight - dot.offsetHeight) {
                dot.style.top = `${y = y + 5}px`;
            }
            break;
    }
})