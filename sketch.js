var bird;
var pipes = [];
function setup(){
	createCanvas(400, 600);
	bird = new Bird();
	pipes.push(new pipe());
}
function draw(){
	background(0);
	for(var i = pipes.length-1; i >= 0; i--){
		pipes[i].show();
		pipes[i].update();
		
		pipes[i].hits(bird);

		if(pipes[i].offscreen()){
			pipes.splice(i, 1);
		}
	}

	bird.update();
	bird.show();

	if(frameCount % 60 == 0){
		pipes.push(new pipe());
	}
}
function keyPressed(){
	if(key == ' '){
		bird.up();
	}
}