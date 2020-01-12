function RectangleTool(){
	//set an icon and a name for the object
	this.icon = "assets/rectangle.jpg";
	this.name = "rectangle";

	var startMouseX = -1;
	var startMouseY = -1;
	var drawing = false;


	this.draw = function(){
        
        //only draw when mouse is clicked
		if(mouseIsPressed){
			//if it's the start of drawing a new line
			if(startMouseX == -1){
				startMouseX = mouseX;
				startMouseY = mouseY;
				drawing = true;
				//save the current pixel Array
				loadPixels();
			}
			else{
				//update the screen with the saved pixels to hide any previous
				//line between mouse pressed and released
				updatePixels();
                strokeWeight(1);
				//draw the line
				rect(startMouseX, startMouseY, mouseX - startMouseX, mouseY - startMouseY);
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
