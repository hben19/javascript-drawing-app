//spray can contsructor function
function SprayCanTool() {
    this.name = "sprayCanTool",
    this.icon = "assets/sprayCan.jpg",
    this.draw = function(){
        stroke(colourPrev);
        var sizeSlider = document.getElementById("sizeSlider").value;
        strokeWeight(sizeSlider / 6);
        this.points = sizeSlider * 1.2;
        this.spread = sizeSlider * 1.1;
        
        //if the mouse is pressed paint on the canvas
        //spread describes how far to spread the paint from the mouse pointer
        //points holds how many pixels of paint for each mouse press.
        if(mouseIsPressed){
            for(var i = 0; i < this.points; i++){
                point(random(mouseX-this.spread, mouseX + this.spread), 
                    random(mouseY-this.spread, mouseY+this.spread));
            }
        }
        loadPixels();
    }
    
    //add slider option
    this.populateOptions = function(){
            $(".options").html("<input type='range' min='1' max='20' value='10' class='slider' id='sizeSlider'>")
        }
    
    this.unselectTool = function(){
		updatePixels();
		//clear options
		$(".options").html("");
	};
};