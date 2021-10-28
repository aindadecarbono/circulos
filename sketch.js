function setup() {
	createCanvas(windowWidth, windowHeight);
	background("white");
	noLoop();
}

function draw() {

	for (let i = 0; i < windowHeight/2; i++){
		noStroke();
		fill(random(256),random(256),random(256));
		ellipse(random(windowWidth), random(windowHeight),random(windowHeight/3));
	}
}
