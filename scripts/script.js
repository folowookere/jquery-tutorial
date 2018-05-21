// Lesson 10

/*  wrap() - wraps all matched elements individually
    unwrap() - unwraps all matched elements
    wrapAll() - wraps all elements combined with 1 single element
*/

// $("section").wrap("<div>");
// $("section").unwrap();
// $("section").wrapAll("<div>");

// var wrapper = "<div class ='wrapper'>";
// var button = $(".button");
// var wrapped = true;

// button[0].onclick = function(){
//     if (wrapped){
//         $("section").unwrap();
//         wrapped = false;
//         button.text("wrap");
//     }   else {
//         $("section").wrapAll(wrapper);
//         wrapped = true;
//         button.text("unwrap");
//     }
// };

//Lesson 11

// $(".button").empty();
// $("#points-of-sale").empty();

// $(".button").remove();
// $("#contact img").remove();

// .empty() - empties the inner HTML of an element
// .remove() - removes the element completely

// Lesson 12

console.log( $("#contact img").attr("alt"));
 

/* 

.removeAttr() removes an attribute completely
.attr() can read or set any attribute

*/




    