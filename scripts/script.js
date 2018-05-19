//Lesson 7 | Traversing the DOM

//Next .next gives the element next in line
$("#contact-methods").next().css({border: "3px solid red"});

//Previous .prev gives the element previously in line
// $("#social-nav").prev().css({border: "3px solid blue"});

//Parent .parent or .parents for all the parents of the type

//Children .children of an element

//Finds the class inside an element .find

//Closest .closest moves up the DOM to find nearest parent of which element you want

//Lesson 8 |  *use in small doses

// $("#contact-methods").css({border: "2px solid red"})
//     .next().css({border: "2px solid green"})
//     .closest("section").css({border:"2px solid blue"});
    
//Lesson 9 | Adding Content using jQuery

var tweet = "<div style='margin:20px 0; padding: 10px; background:#eee'>The big fight live:Ham vs Cheese!</div>";

$("#tweets div p").text(tweet)

//Adding & changing content

// .append() adds content to bottom of the element
// .prepend() adds content to top of the element
// .before() adds content before element
// .after() adds content after element
// .html() changes the whole html of the element
// .text() changes the text of an element

