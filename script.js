var timerIsOn = false;
var timer = 0;
var seconds = 0;
var minutes = 0;

function resetTimer(){
    timerIsOn = false;
    clearTimeout(timer);
    seconds = 0;
    document.getElementById('div1').innerHTML = '00 : 00';
    document.getElementById('startStop').innerHTML = 'Start';
}

function formatTime(){
    if(seconds<10){
        seconds = '0' + seconds;
    }
    if(minutes<10){
        minutes = '0' + parseInt(minutes);
    }
}

function timerRun(){
    seconds++;
    if(seconds==60){
        seconds = 0;
        minutes++;
    }

    formatTime();
    document.getElementById('div1').innerHTML =  minutes + " : " + seconds;

    // setTimeout("timerRun()", 1000);
    timer = setTimeout("timerRun()", 1000);
}

function toggleTimer(){
    timerIsOn = !timerIsOn;

    if(timerIsOn){
        document.getElementById('startStop').innerHTML = 'Stop';
        setTimeout('timerRun()', 1000);
    } else {
        document.getElementById('startStop').innerHTML = 'Start';
        clearTimeout(timer);
    }
}
