const textBox = document.getElementById("txt");
var time;
function getTime(){
    const date = new Date().toLocaleTimeString()
    textBox.value = date;
    textBox.style.fontWeight = "900";
}

function startTimer(){
    time = setInterval(getTime, 2000);
}

function stopTimer(){
    clearInterval(time);
    textBox.value = "";
}
