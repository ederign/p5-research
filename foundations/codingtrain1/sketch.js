function setup() {
	createCanvas(windowWidth, windowHeight);
	background(250, 250, 100);
}

function draw() {
	// background(250, 250, 100);
	// stroke(200, 200, 200);
	// fill(100,100,100);
	// rect(50, 50, 100, 100);
	// stroke(250, 250, 250);
	// fill(250, 100, 100);
	// ellipse(mouseX, mouseY, 50, 50);

	
	// console.log(mouseX);

	noStroke();
	ellipse(mouseX, mouseY, 25, 25);
	fill(250, 200, 200, 50);
}

function mousePressed(){
	background(250, 250, 100);
}