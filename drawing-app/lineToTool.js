//LineToTool constructor function

function LineToTool(){
    //loads the line icon
	this.icon = "assets/lineTo.jpg";
	this.name = "LineTo";

	var startMouseX = -1;
	var startMouseY = -1;
	var drawing = false;
    
    

    //creating a method to draw lines
	this.draw = function(){
        var sizeSlider = document.getElementById("sizeSlider").value;
        //change the sroke weight to the slider's value
        strokeWeight(sizeSlider);
        
		if(mouseIsPressed){
			if(startMouseX == -1){
                //if the mouse is pressed startMouseX updates to mouse position
				startMouseX = mouseX;
				startMouseY = mouseY;
                //drawing becomes true
				drawing = true;
                //starts loading the pixels from mouse position
				loadPixels();
                
			}
            
            
			else{
                //when you let go the mouse creates a line between the mouse start position and the end position
				updatePixels();
				line(startMouseX, startMouseY, mouseX, mouseY);
			}

		}

		else if(drawing){
            //sets startMouse and the drawing boolean to the original value
			drawing = false;
			startMouseX = -1;
			startMouseY = -1;
		}
        
	};
    
    this.populateOptions = function(){
            $(".options").html("<input type='range' min='1' max='20' value='10' class='slider' id='sizeSlider'>")
        }
    
    this.unselectTool = function(){
		updatePixels();
		//clear options
		$(".options").html("");
	};
}
