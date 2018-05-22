//Lesson 19 - jQuery Animations

// $(document).ready(function(){
    
//     function complete() {
//         alert("Animation complete");
//     }
    
//     $("section > h2").on("click", function(){
        
//         $(this).animate({"width" : "500px", "height" : "100px" }, 1000, "linear", complete);
//         });
        
//     });
    
//Lesson 20 - Fading elements in & out

// $(document).ready(function(){
    
    
    
//     $("section > h2").on("click", function(){
        
//         //fades out and removed from the document
//         // $(this).fadeOut();
//         // });
        
//         //  $(this).fadeOut(2000).fadeIn(500); //time in milliseconds
//         // });
        
//          $(this)
//             .fadeTo(200, 0.2)
//             .fadeTo(200, 0.8)
//             .fadeTo(200, 0.2)
//             .fadeTo(200, 0.8)
//             .fadeTo(200, 0.2)
//             .fadeTo(200, 0.8);
//          });
        
//     });
    
// Lesson 21 - Show, hide & toggle

$(document).ready(function(){
    
    
    
    $("img[alt=map]").on("click", function(){
        
        //Show and hide elements
        // $(this).hide(1000).show(1000);
        
        //Toggle elements in and out. If it's not showing it will fade back in
        $("section > h2").toggle(1000);
        
         });
    });
    





