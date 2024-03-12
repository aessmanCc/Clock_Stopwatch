"use strict";

$(document).ready(function() {
   
   //Call the createClock Function from the library_clock library.
   const clock = createClock($("#hours"),$("#minutes"),$("#seconds"),$("#ampm"));

   //Use the start method from the public object in the library_clock library. 
   clock.start();
   
   //call the createStopwatch function from the library_stopWatch library.
   const stopWatch = createStopwatch($("#s_minutes"),$("#s_seconds"),$("#s_ms"));

   //Use the stort, stop, and reset methods from the public object in the the library_stopWatch library on click. 
   $("#start").click( () => {
        stopWatch.start();
    }); 

    $("#stop").click( () => {
        stopWatch.stop();
    }); 
    
    $("#reset").click( () => {		
        stopWatch.reset();
    });    
    
}); // end ready()
