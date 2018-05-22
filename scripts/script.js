//Lesson 22 - Sliding elements

$(document).ready(function(){
    
    $(".slide-button-up").on("click", function(){
        
        //Toggles animations up or down
        $("#lead-banner").slideToggle(1000, function(){
            alert("Animation complete");
        });
        
//         $("#lead-banner").slideUp(100);
        

// });
//     $(".slide-button-down").on("click", function(){
                
//           $("#lead-banner").slideDown(4000, function(){
//               alert("Animation complete");
//         });
    });
});

//Lesson 23 - Fading animations

$(document).ready(function(){
    
    var allQuotes = $("blockquote");
    var currentQuote = 0;
    
    function changeQuote() {
        $(allQuotes[currentQuote]).fadeOut(500, function(){
            
             //If currentQuote is equal to 2 then go back to the first one
          if(currentQuote == allQuotes.length - 1){
            currentQuote = 0;
        } else {
            currentQuote++;
        }
        
        $(allQuotes[currentQuote]).fadeIn(500);
        });
      
    }
    
    var quoteTimer = setInterval(changeQuote, 3000);
    
});

//Lesson 24 - Sliding aninmation example

$(document).ready(function(){
    
    var items = $("#points-of-sale li");
    
    items.on("click", function() {
        
    $(this).find("p").slideToggle(500);
    });
    
});

