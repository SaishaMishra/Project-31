class Drops{
  constructor(x,y){
  var options={
   
    'restitution':0.3,
    'friction':1,
    'density':1.2
  }
  this.body=Bodies.circle(x,y,5,options)
  //this.image=loadImage("walking_1.png");
  this.radius = 5;
  World.add(world, this.body);
  }

  updateDrops(){
      if(this.body.position.y>700){
          Matter.Body.setPosition(this.body, {x:random(0,400), y:random(0,400)})
      }
  }
  display(){
      fill("blue")
      ellipseMode(CENTER);
      ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
 
      
      } 
}