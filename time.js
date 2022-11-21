function currentTime () {
    let date = new Date();
    document.getElementById("time").innerHTML = date.toLocaleTimeString();
    }
    setInterval(currentTime, 1000);