document.getElementById("btn").onclick = iniciarTroca;
document.getElementById("btn2").onclick = pararTroca;

function troca() {
    const elem = document.getElementById("trocar")
    var color = ['blue', 'brown', 'red', 'green', 'yellow', 'orange', 'pink', 'purple']
    elem.style.color = color[parseInt(Math.random() * 9)]
    console.log(elem.style.color)
}

function iniciarTroca() {
    time = setInterval(troca, 1000);
}

function pararTroca() {
    clearInterval(time);
}
