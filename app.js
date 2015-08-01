// On DOM ready, add click Event Listeners to the canvas 
window.onload = function(){
  var canvas = document.getElementById("canvas");
  canvas.addEventListener("click", paintPixel);
}

// Define Functions & Global Variables


// 

// $(document).ready( function(){
//   var canvas = $( ".pixel" ).on("click", paintPixel);
// });  //in jQuery

// Chris & Geoff inspired 

// function paintPixel(event){
//   // $(event.currentTarget).css("background-color", activeColor); // in jQuery
//   event.target.style.backgroundColor = activeColor; //with JavaScript

//   if ( !event.target.hasAttribute("string-color") || event.target.getAttribute( "string-color" ) !== activeColor ){
//     event.target.style.backgroundColor = activeColor;
//     event.target.setAttribute("string-color", activeColor);
//   } else {
//     event.target.style.backgroundColor = inactiveColor;
//     event.target.setAttribute("string-color", inactiveColor);
//   }
//   event.target.style.backgroundColor = event.target.style.backgroundColor !== activeColor ? activeColor : "#FAFAFA";
    
// }