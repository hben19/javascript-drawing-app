function EllipseTool(){
	//set an icon and a name for the object
	this.icon = "assets/ellipse.jpg";
	this.name = "ellipse";

	var startMouseX = -1;
	var startMouseY = -1;
	var drawing = false;

	this.draw = function(){

        //only draw when mouse is clicked
		if(mouseIsPressed){
			//if it's the start of drawing a new ellipse
			if(startMouseX == -1){
				startMouseX = mouseX;
				startMouseY = mouseY;
				drawing = true;
				loadPixels();
			}

			else{
				updatePixels();
                strokeWeight(1);
				//draw the ellipse from the start position of mouse to the current of the mouse
				ellipse((startMouseX + mouseX)/2, (startMouseY+mouseY)/2, mouseX - startMouseX, mouseY - startMouseY);
			}
		}

		else if(drawing){
			//save the pixels with the most recent line and reset the
			//drawing bool and start locations
			loadPixels();
			drawing = false;
			startMouseX = -1;
			startMouseY = -1;
		}
	};


}
