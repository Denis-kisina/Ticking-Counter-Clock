
function showTime() {
    let date = new Date();
    let day = date.getDay();
    let month = date.getMonth();
    let year = date.getFullYear();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let time = hour + ":" + ":" + minutes + ":" + seconds;
    document.getElementById("time").innerHTML = time;

}