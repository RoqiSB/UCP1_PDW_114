function updateDateTime() {
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var now = new Date();
    var currentDay = days[now.getDay()];
    var dateTime = now.toLocaleString();
    var dateTimeText = currentDay + ", " + "<br>" + dateTime;

    document.getElementById("currentDateTime").innerHTML = dateTimeText;

}

setInterval(updateDateTime, 1000);