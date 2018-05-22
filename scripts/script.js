//Lesson 16 - Event helpers

$("#lead-banner").on("dblclick", function() {
    alert("You double clicked me");
    $("#lead-banner").off("dblclick"); //Can only be clicked once
});

//Lesson 17 - Document Ready & Window Load Events
//when scripts are at top of the page, or can use it just to make sure things are loaded first

//when document is ready run what's inside

// $(document).ready(function() {
    
// });

// //or

// $(function() {
    
// });

// //window is ready

// $(window).load(function() {
    
    
    
// });

//Lesson 18 - The event object in jQuery 

$(document).ready(function() {
    
   $("*").on("click", function(e) {
       console.log(e.target);
       console.log("The event type is " + e.type);
       console.log("The x coordinate of the event is: " + e.pageX);
       console.log("The y coordinate of the event is: " + e.pageY);
       e.stopPropagation();
       
    });
});