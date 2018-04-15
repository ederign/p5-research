var increment = 10;

var circle = {
	x: 0,
	y: 100,
	diameter: 50
};

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(250, 250, 100);
}

function draw() {
	background(250, 250, 100);
	fill(250, 200, 200);
	ellipse(circle.x, circle.y, circle.diameter, circle.diameter);
	
	
	circle.x = circle.x + increment;
	if ((circle.x > windowWidth) || (circle.x < 0)){
		increment = increment*(-1)
	}

}
