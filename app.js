// On DOM ready, add click Event Listeners to the canvas 
window.onload = function(){
  var canvas = document.getElementById("canvas");
  var primaryPalette = document.getElementById("color_palette_primary");
  canvas.addEventListener("click", paintPixel);
  // canvas.addEventListener("mousedown", mouseMoving);
  // canvas.addEventListener("mouseover", dragPaintPixels);
  primaryPalette.addEventListener("click", chooseColor);

}



// Create global color object
var colorPalette = {
  currentColor: "bg-red-500",
  mouseIsDown: false
};

// Choose a color from the default color palette
var chooseColor = function(){
  var newColor = event.target.getAttribute("data-color");
  colorPalette.currentColor = newColor;
  // Need to use .hasAttribute to set the currentColor in colorPalette
};

var pixelBrush = function(){

};

// Queries the global color object for the current color, and applies it
// to the element that was clicked.  If already set to currentColor, it 
// will toggle the pixel to the unpainted (default) state.
var paintPixel = function(){
  var colorToApply = colorPalette.currentColor;
  var currentColor = event.target.getAttribute("data-color");
  if (colorToApply !== currentColor){
    event.target.setAttribute("data-color", colorToApply);
    event.target.classList.remove(currentColor);
    event.target.classList.add(colorToApply);
  } else if (colorToApply == currentColor){
    event.target.setAttribute("data-color", "bg-default");
    event.target.classList.remove(currentColor);
    event.target.classList.add("bg-default");
  }
};


