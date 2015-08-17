// On DOM ready, add click Event Listeners to the canvas
window.onload = function(){
  var canvas = document.getElementById("canvas");
  var primaryPalette = document.getElementById("color_palette_primary");
  var toolPicker = document.getElementById("tool_picker");
  canvas.addEventListener("mousedown", applyTool) //works for clicks
  primaryPalette.addEventListener("click", chooseColor);
  toolPicker.addEventListener("click", switchTool)
}

// Finds the active tool and applies its logic to the clicked pixel.
function applyTool(event){
  switch (workspace.activeTool) {
    case "pixel_brush":
      brushPixel(event);
      break;

    case "paint_tool":
      dumpPaint(event);
      break;

    case "color_picker":
      pickColor(event);
      break;
  }
}

// Choose a color from the default color palette
function chooseColor(event){
  var newColor = event.target.getAttribute("data-color");
  workspace.currentColor = newColor;
};

// Switches the active tool in the workspace object.
function switchTool(event){
  var toolToEquip = event.target.getAttribute("data-tooltype");
  workspace.activeTool = toolToEquip;
}

// Create global color object
var workspace = {
  currentColor: "bg-red-500",
  activeTool: "pixel_brush"
};

// Queries the global color object for the current color, and applies it
// to the element that was clicked.  If already set to currentColor, it
// will toggle the pixel to the unpainted (default) state.
function brushPixel(event){
  $( "#canvas" ).selectable({
    disabled: true
  });

  addOrRemoveCurrentColor(event);

  canvas.addEventListener("mouseover", dragToPaint);
  document.addEventListener("mouseup", stopPainting);
};

function dragToPaint(event){
  addCurrentColor(event);
};

function stopPainting(event){
  canvas.removeEventListener("mouseover", dragToPaint);
  document.removeEventListener("mouseup", dragToPaint);
};

function addOrRemoveCurrentColor(event) {
  var colorToApply = workspace.currentColor;
  var currentColor = event.target.getAttribute("data-color");
  if (colorToApply !== currentColor){
    event.target.classList.remove(event.target.getAttribute("data-color"))
    event.target.setAttribute("data-color", colorToApply);
    event.target.classList.add(colorToApply);
  }

  else {
    event.target.setAttribute("data-color", "bg-default");
    event.target.classList.remove(currentColor);
    event.target.classList.add("bg-default");
  }
};

function addCurrentColor(event) {
    if (event.target.classList.contains(workspace.currentColor)) {
      return;
    }
    event.target.classList.remove(event.target.getAttribute("data-color"));
    event.target.setAttribute("data-color", workspace.currentColor);
    event.target.classList.add(workspace.currentColor);
};

var dumpGrid = [];
function dumpPaint(event){
  $(function() {
    $( "#canvas" ).selectable();
  });

  $( "#canvas" ).selectable({
    disabled: false
  });

  $( "#canvas" ).on( "selectableselecting", function( event, ui ) {
    $(ui.selecting).removeClass($(ui.selecting).attr('data-color'));
    $(ui.selecting).attr('data-color', workspace.currentColor);
    $(ui.selecting).addClass(workspace.currentColor);
    dumpGrid.push(ui.selecting);
  });




};

function pickColor(event){
  console.log("I'm picking a color now.");
};
