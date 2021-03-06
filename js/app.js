
function showTime() {
    let date = new Date();
    let day = date.getDay();
    let month = date.getMonth();
    let year = date.getFullYear();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    if (hour === 0){
        hour = 12;
    }
    hour = (hour < 10)? "0" + hour : hour;
    minutes = (minutes < 10)? "0" + minutes : minutes;
    seconds = (seconds < 10)? "0" + seconds : seconds;

    let time = hour + ":"  + minutes + ":" + seconds;
    let calenderDay = day + "/" + month + "/" + year;

    document.getElementById("hour").innerHTML = hour;
    document.getElementById("minute").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    document.getElementById("days").innerHTML = day;
    document.getElementById("month").innerHTML = month;
    document.getElementById("year").innerHTML = year;
    let tick = document.getElementById("sound");
    let tic = document.createElement("audio");
    tic.src = "css/clock-tick.mp3";
    let promise = tic.play().then(r => {window.onload});
    setTimeout(showTime, 1000);
}
showTime();
