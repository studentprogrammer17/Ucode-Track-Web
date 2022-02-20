function getFormattedDate(dateObject) {
    let year = dateObject.getFullYear();
    let month = dateObject.getMonth()+1;
    let dt = dateObject.getDate();    
    let day_of_week = dateObject.getDay(); 

    if(day_of_week == 0) {
        day_of_week = "Sunday";
    }
    if(day_of_week == 1) {
        day_of_week = "Monday";
    }
    if(day_of_week == 2) {
        day_of_week = "Tuesday";
    }
    if(day_of_week == 3) {
        day_of_week = "Wednesday";
    }
    if(day_of_week == 4) {
        day_of_week = "Thursday";
    }
    if(day_of_week == 5) {
        day_of_week = "Friday";
    }
    if(day_of_week == 6) {
        day_of_week = "Saturday";
    }

    
    var hours = dateObject.getHours();
    var mins = dateObject.getMinutes();

    if (dt < 10) {
        dt = '0' + dt;
    }
    if (month < 10) {
        month = '0' + month;
    }
    if(hours < 10) {
        hours = '0' + hours;
    }
    if(mins < 10) {
        mins = '0' + mins;
    }
    
    return dt + "." + month + "." + year + " " + hours + ":" + mins + " " + day_of_week;
}

// const date0 = new Date('42 03:24:00');
// console.log(getFormattedDate(date0));

