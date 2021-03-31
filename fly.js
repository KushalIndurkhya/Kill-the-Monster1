class Fly{
    constructor(bodyA,pointB){
        var options={
          
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1.2,
            length: 250
          } 
          
          this.pointB=pointB;
          this.fly = Constraint.create(options);
          World.add(myWorld,this.fly);
    }
    display(){
      
     
        var pointA = this.fly.bodyA.position;
        var pointB = this.pointB;
        push();
        stroke(127, 24, 24)
        strokeWeight(0)
        line(pointB.x,pointB.y,pointA.x,pointA.y)
        pop();
      }
    }