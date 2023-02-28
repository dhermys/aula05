const textBox = document.getElementById("txt");
var time;
function getTime(){
    const date = new Date().toLocaleTimeString()
    textBox.value = date;
}

function startTimer(){
    time = setInterval(getTime, 1000);
}

function stopTimer(){
    clearInterval(time);
    textBox.value = "";
}
