class umbrella{
    constructor(x,y){
    var options={
      'isStatic':true,
      'restitution':0.3,
      'friction':1,
      'density':1.2
    }
    this.image = loadImage("Walking Frame/walking_1.png")
    this.body=Bodies.circle(x,y,60,options)
    World.add(world, this.body);
    this.radius=60;
    }

    display(){
      var pos = this.body.position;
      imageMode(CENTER);
      image(this.image,pos.x,pos.y+70,300,300);
        
        } 
}