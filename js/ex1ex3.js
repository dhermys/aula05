// Exercício 1
function exibirMensagem() {
    setTimeout(() => { alert('Sua conexão falhou!! Tente se reconectar novamente!!') }, 3000);
}

// Exercício 2
document.getElementById("btn").onclick = iniciarTroca;
document.getElementById("btn2").onclick = pararTroca;

var counter = 1
function iniciarTroca() {
    const elem = document.getElementById("trocar")

    var color = ['black', 'blue', 'brown', 'red', 'green', 'yellow', 'orange', 'pink', 'purple']
    var timer = setInterval(function () {
        if (counter < 1) {
            clearInterval(timer)
        }
        elem.style.color = color[(parseInt(Math.random() * 8)) + 1]
    }, 1000);
}

function pararTroca() {
    setTimeout(() => {return counter = 1}, 500);
    return counter = 0
}

