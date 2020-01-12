function VertexTool() {
    this.name = "vertex";
    this.icon = "assets/vertex.jpg";
    
    //a method which is filling up the array with with mouse X and mouse Y positions
    this.createPoints = function(){
        strokeWeight(5);
        //if mouse clicked on the canvas it creates points
        mouseClicked = function(){
            point(mouseX, mouseY);
            //fill up an array with x and y points until we are creating shapes
            for(var j = 0; j < vertexPoints.shapes.length; j++){
                if(mouseX >= 0 && mouseX <= width &&
                   mouseY >= 0 && mouseY <= height)
                {
                    vertexPoints.shapes[j].pointsX.push(mouseX);
                    vertexPoints.shapes[j].pointsY.push(mouseY);
                }
            }
        }        
    };
    
    this.drawVertex = function(){
        for(var j= 0; j < vertexPoints.shapes.length; j++){
            beginShape();
            for(var i = 0; i < vertexPoints.shapes[j].pointsX.length; i++){
                vertex(vertexPoints.shapes[j].pointsX[i],
                       vertexPoints.shapes[j].pointsY[i]);
            }
            //when the enter is pressed it connects the points creating a vertex shape
            //also creates a new array for the new shape
            keyPressed = function(){
                if(keyCode == ENTER){
                    endShape(CLOSE);
                    vertexPoints.shapes.push({pointsX:[], pointsY: []})
                }
            } 
        }
    };
    
    this.draw = function(){
        this.createPoints();
        this.drawVertex();
        loadPixels();
    };
    
    //add a brief description how to use the tool when its choosen
    this.populateOptions = function(){
        $(".options").html("<div> Firstly choose the color and then press mouse to create edges, create as many as you want, then press ENTER to fill the shape!</div>")
    }
    
     this.unselectTool = function(){
		updatePixels();
		//clear options
		$(".options").html("");
        noStroke();
	};
}