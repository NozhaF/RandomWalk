var x = 500;
var y = 350;
var delta = [-1,1]
var walkers = Array(100);



function setup() {
	createCanvas(windowWidth,windowHeight);

	for (var i = 0 ; i < walkers.length; i++) {
		walkers[i] = new Walker();
		}


}


function Walker() {
    this.x = 500;
    this.y = 350;
    this.a = 0;
    this.deltax = 0;
    this.move = function(){
    	fill(250,63,63,100);
		ellipse(this.x, this.y, 10, 10);
		this.a = random(0,delta.length);
		this.deltax = delta[int(this.a)];
		this.x = this.x + this.deltax;


    }
}




function draw() {
	background(48);
	stroke(200);
	line(100, y, 900, y);
	noStroke();

	fill(250,245,63);
	ellipse(x, y, 10, 10);
	textSize(36);
	text("100 walkers randomly walking ... ", 100, 100);

for (var i = 0; i < walkers.length; i++) {
		walkers[i].move();
		

	}


}

