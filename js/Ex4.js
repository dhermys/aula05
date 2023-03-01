const sortedNameTxt = document.getElementById("sortedName");
const velocityTxt = document.getElementById("velocity");
const timeTxt = document.getElementById("time");

var velocityInt;
var timeInt;

const nomes = ["Pafúncio", "Ana Banana", "Gabriel", "Humberto", "Adagoberto",
"Clotilde", "Lurdes", "Beatriz", "Amanda", "Clóvis",
"Frank", "Matilda", "Maria Juana", "Gustavo", "Diego"];

var timer;

function raffleName(){
    let index = parseInt(Math.random() * nomes.length);
    sortedNameTxt.value = nomes[index];
}

function startRaffle(){
    velocityInt = validateInput(velocityTxt.value);
    timer = setInterval(raffleName, velocityInt);
}

function makeRaffle(){
    timeInt = validateInput(timeTxt.value);
    startRaffle();
    setTimeout(function(){clearInterval(timer)}, timeInt);
}

function validateInput(input){
    let num = parseInt(input);
    if(!isNaN(num) && num > 0){
        return num;
    }
    else{
        return 0;
    }
}
