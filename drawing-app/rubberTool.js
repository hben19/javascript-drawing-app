function RubberTool(){
	//set an icon and a name for the object
	this.icon = "assets/rubber.jpg";
	this.name = "rubber";
    var prevColour = '"' + colourP.selectedColour.valueOf() + '"';

	//to smoothly draw we'll draw a line from the previous mouse location
	//to the current mouse location. The following values store
	//the locations from the last frame. They are -1 to start with because
	//we haven't started drawing yet.
	var previousMouseX = -1;
	var previousMouseY = -1;

	this.draw = function(){
        //change the sroke weight to the slider's value
        strokeWeight(sizeSlider.value);
        //if the mouse is pressed
		if(mouseIsPressed){
        fill(255,255,255);
        stroke(255,255,255);
			//check if they previousX and Y are -1. set them to the current
			//mouse X and Y if they are.
			if (previousMouseX == -1){
				previousMouseX = mouseX;
				previousMouseY = mouseY;
			}
			//if we already have values for previousX and Y we can draw a line from 
			//there to the current mouse location
			else{
				line(previousMouseX, previousMouseY, mouseX, mouseY);
				previousMouseX = mouseX;
				previousMouseY = mouseY;
			}
		}
		//if the user has released the mouse we want to set the previousMouse values 
		//back to -1.
		//try and comment out these lines and see what happens!
		else{
			previousMouseX = -1;
			previousMouseY = -1;
		}
        loadPixels();
	};
    
    this.populateOptions = function(){
            $(".options").html("<input type='range' min='1' max='20' value='10' class='slider' id='sizeSlider'>")
        }
    
    this.unselectTool = function(){
            stroke(colourPrev);
            console.log(colourPrev);
            fill(colourPrev);
		      //clear options
		      $(".options").html("");
    }
}