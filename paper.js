class paperBall{
	constructor(){
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:1.2
		}

		this.image = loadImage("paperball.png");
		this.r = 50;
		this.body = Bodies.circle(200,450,this.r/2,options);
		World.add(world, this.body);
	}

	display(){
		push();
		translate(this.body.position.x, this.body.position.y);
		imageMode(CENTER);
		fill(255,0,255);
		image(this.image,0,0,70,70);
		pop();		
	}
}