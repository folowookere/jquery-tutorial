//Target an element
// $("h3").css({border: "3px solid pink"});

//Targeting a class
// $(".wrapper").css({border: "3px solid purple"});

//Targeting an id
// $("#clients").css({border: "3px solid magenta"});

//Using first and last filter to target elements
// $("header nav li:first").css({border: "2px solid blue"});
// $("header nav li:last").css({border: "2px solid green"});

// //First child and last child
// $("#contact ul:first").css({border: "3px solid yellow"});
// $("#contact ul:last").css({border: "3px solid red"});

//Even 
// $("header nav li:even").css({border: "2px solid blue"});
//Odd
// $("header nav li:odd").css({border: "2px solid magenta"});

//Not
// $("section:not('#contact')").css({border: "2px solid green"});

//Less than
// $("#social-nav li:lt(3)").css({border: "2px solid blue"});

//Greater than
// $("#social-nav li:gt(2)").css({border: "2px solid blue"});

//Attribute filters
// $("div[class]").css({border: "2px solid pink"});

//Attribute filter with specific value
$("img[alt=quote]").css({border: "2px solid purple"});

// Check jQuery site for more selectors  http://api.jquery.com/category/selectors