var canvas;
var p;
var button;
var changeColor;
var rectX;
var increment;
var canvasHeight = 200;
var canvasWidth = 200;
var rectSize= 50;

function setup() {
	canvas = createCanvas(canvasHeight, canvasWidth);
	canvas.parent('sketch-holder');

	// canvas.position(400, 0);
	// p = createP("This is a p");
	// p.position(10,10);
	button = createButton("change color");
	changeColor();
	button.mousePressed(changeColor);
	rectX = 0;
	increment = 1;
}

function draw() {
	clear();
	background(100);
	fill(r, g, b);
	rectX = rectX + increment;
	rect(rectX, 100, rectSize, rectSize);
	keepInsideCanvas();
}

function keepInsideCanvas() {
	if (rectX > canvasWidth - rectSize){
		reverseMov();
	}

	if (rectX < 0) {
		reverseMov();
	}
}
function changeColor() {
	// Pick colors randomly
	r = random(255);
	g = random(255);
	b = random(255);
	bgColor = color(r, g, b);
}
function reverseMov() {
	increment = increment * (-1);
}