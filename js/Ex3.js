document.getElementById("btn").onclick = iniciarTroca;
document.getElementById("btn2").onclick = pararTroca;

var counter = 1
function iniciarTroca() {
    const elem = document.getElementById("trocar")
    var color = ['blue', 'brown', 'red', 'green', 'yellow', 'orange', 'pink', 'purple']

    var timer = setInterval(function () {
        if (counter < 1) {
            clearInterval(timer)
        }
        elem.style.color = color[parseInt(Math.random() * 9)]
        console.log(elem.style.color)
    }, 1000);
}

function pararTroca() {
    setTimeout(() => {return counter = 1}, 500);
    return counter = 0
}

