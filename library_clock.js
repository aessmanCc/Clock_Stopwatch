"use strict";

const createClock = (hourSpan, minuteSpan, secondSpan, ampmSpan) => {
    // private state
const padSingleDigit = num => num.toString().padStart(2, "0");

const displayCurrentTime = () => {
    const now = new Date();
    let hours = now.getHours();
    let ampm = "AM"; // set default value
    
    // correct hours and AM/PM value for display
    if (hours > 12) { // convert from military time
        hours = hours - 12;
        ampm = "PM";
    } else { // adjust 12 noon and 12 midnight
         switch (hours) {
            case 12: // noon
                ampm = "PM";
                break;
            case 0:  // midnight
                hours = 12;
                ampm = "AM";
        }
    }
    $("#hours").text(hours);
    $("#minutes").text( padSingleDigit(now.getMinutes()) );
    $("#seconds").text( padSingleDigit(now.getSeconds()) );
    $("#ampm").text(ampm);
};
    
    // public methods
        const displayClock = {
            start(){
                displayCurrentTime();
                setInterval(displayCurrentTime, 1000);
            }
        };
     return displayClock;
    
};