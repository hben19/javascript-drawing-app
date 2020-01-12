//global variables that will store the toolbox colour palette
//amnd the helper functions
var toolbox = null;
var colourP = null;
var helpers = null;
var imgprev = null;
var colourPrev = "black";


function setup() {
    
    //create a canvas to fill the content div from index.html
    canvasContainer = $('#content');
    var canvas = createCanvas(canvasContainer.innerWidth(), canvasContainer.innerHeight());
    canvas.parent("content");
    img = loadImage("assets/freehand.jpg");
    image(img, 0, 0);
    
    
   //create helper functions and the colour palette
    helpers = new HelperFunctions();
    colourP = new ColourPalette();
    
    //create a toolbox for storing the tools
    toolbox = new Toolbox();
    
    //add the tools to the toolbox. 
    toolbox.addTool(new FreehandTool());
    toolbox.addTool(new LineToTool());
    toolbox.addTool(new SprayCanTool());
    toolbox.addTool(new MirrorDrawTool());
    toolbox.addTool(new RectangleTool());
    toolbox.addTool(new EllipseTool());
    toolbox.addTool(new VertexTool());
    toolbox.addTool(new RubberTool());
    
    background(255);
    
    canvas.dragOver(highlight);
    canvas.dragLeave(unhighlight);
    canvas.drop(gotFile);

}

function highlight(){
    
    textSize(20);
    textStyle(BOLD);
    stroke(255);
    text("Hold mouse down for 2 seconds for image to load", width / 2, height / 2);
    
    if(imgprev == null){
    background(50, 50, 50, 100);
    text("Hold mouse down for 2 seconds for image to load", width / 2, height / 2);
    }
    else{
        image(imgprev, 0, 0, width, height);
        fill(100, 100, 100, 100);
        rect(0, 0, width, height);
    }
}

function unhighlight(){
    image(imgprev, 0, 0, width, height);
    fill(colourPrev);
    stroke(colourPrev);
}

function gotFile(file){
    
    var img = createImg(file.data);
    imgprev = img;
    img.hide();
    
    image(img, 0, 0, width, height);
    fill(colourPrev);
    stroke(colourPrev);
}

function draw() {
    //call the draw function from the selected tool.
    //hasOwnProperty is a javascript function that tests
    //if an object contains a particular method or property
    //if there isn't a draw method the app will alert the user
    if(toolbox.selectedTool.hasOwnProperty("draw")){
        toolbox.selectedTool.draw();
    }
    else{
        alert("it doesn't look like your tool has a draw method!");
    }
    
    // Change the curzor when its on the canvas according to the selected tool
    if(mouseX >= 0 && mouseY <= height && mouseY > 0){
        if(toolbox.selectedTool.name == "LineTo" || toolbox.selectedTool.name == "ellipse" || toolbox.selectedTool.name == "rectangle"){
            document.body.style.cursor = "crosshair";
        } 
        else if(toolbox.selectedTool.name == "freehand" || toolbox.selectedTool.name == "mirrorDraw")
        {
            document.body.style.cursor = "url('assets/freehandCurzor.png') 5 40, auto";
        }
        else if(toolbox.selectedTool.name == "sprayCanTool")
        {
            document.body.style.cursor = "url('assets/sprayCanCurzor.png') 5 3, auto";
        }
        else if(toolbox.selectedTool.name == "vertex")
        {
            document.body.style.cursor = "copy";
        }
        else if(toolbox.selectedTool.name == "rubber")
        {
            document.body.style.cursor = "url('assets/rubberCurzor.png') 4 28, auto";
        }
        else 
        {
            document.body.style.cursor = "default";
        }
    } else {
        document.body.style.cursor = "default";
    }
}


