function currentDate () {
    let day = new Date();
    document.getElementById("calendar").innerHTML = day.toLocaleDateString();
}
currentDate()