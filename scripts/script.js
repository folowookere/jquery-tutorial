//Lesson 13 - CSS with jQuery
//Check the css value of a certain element
// console.log($("#social-nav").css("top"));

//Passing object into method for css, easier to maintain & manage than long chains
/* 
$("#social-nav").css( {
    "top" : "-400px",
    "left" : "150",
    "opacity" : "0.5",
    "border-top" : "4px solid red"
});
*/

// Lesson 14 - Adding and Removing Classes

var button = $("#lead-banner a");

/* every time button "View our work" is clicked it toggles class open in css file
button[0].onclick = function() {
    $("#points-of-sale").toggleClass("open");
    return false;  
    this negates default behavior, button won't go anywhere
};

// $("header .wrapper").removeClass("wrapper");
// $("header > div").addClass("wrapper");


removeClass() - removes a class from the matched element(s)
addClass() - adds a class to the matched element(s)
toggleClass - toggles the class on and off on their matched element(s)
*/

// Lesson 15 - Binding & Unbinding Events


var liPointsOfSale = $("#points-of-sale li");
    liPointsOfSale.on("click", function(){
    
    $(this).css({"background":"pink"});
    
    liPointsOfSale.off("click");
    
});

/*

on() - binds an event to matched element(s)
off() - unbinds event from matched element(s)

Site with types of events that can be listened for https://www.w3schools.com/jquery/jquery_ref_events.asp
*/