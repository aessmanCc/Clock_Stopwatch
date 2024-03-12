"use strict";

const createStopwatch = (minuteSpan, secondSpan, msSpan) => {
    // private state
let stopwatchTimer = null;
let elapsed = { minutes:0, seconds:0, milliseconds:0 };

const padSingleDigit = num => num.toString().padStart(2, "0");


const tickStopwatch = () => {    
    // increment milliseconds by 10 milliseconds
    elapsed.milliseconds = elapsed.milliseconds + 10;

    // if milliseconds total 1000, increment seconds by one and reset milliseconds to zero
    if (elapsed.milliseconds == 1000) {
        elapsed.seconds++;
        elapsed.milliseconds = 0;
    }
    // if seconds total 60, increment minutes by one and reset seconds to zero
    if (elapsed.seconds == 60) {
        elapsed.minutes++;
        elapsed.seconds = 0;
    }

    //display new stopwatch time
    $("#s_minutes").text( padSingleDigit(elapsed.minutes) );
    $("#s_seconds").text( padSingleDigit(elapsed.seconds) );
    $("#s_ms").text(elapsed.milliseconds);
};

    //stopwatch wfunctions
const startWatch = () => {
// do first tick of stop watch and then set interval timer to tick 
        // stop watch every 10 milliseconds. Store timer object in stopwatchTimer 
        // variable so next two functions can stop timer.
        tickStopwatch();
        stopwatchTimer = setInterval(tickStopwatch, 10);
    }; 
const stopWatch = () => {
    // stop timer
        clearInterval(stopwatchTimer);
};

const resetWatch = () => {
        clearInterval(stopwatchTimer);

        // clear elapsed object and stopwatch display
        elapsed = { minutes:0, seconds:0, milliseconds:0 }; 

        $("#s_minutes").text("00");
        $("#s_seconds").text("00");
        $("#s_ms").text("000");    
};
    // public methods
    const stopObj = {
        start(){
            startWatch();
        },

        stop() {
            stopWatch();
        },

        reset() {
            resetWatch();
        }


    };
    return stopObj;
};