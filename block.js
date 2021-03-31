class Block{
    constructor(x,y,width,height){

        var options={
'restitution': 0.8,
'density' : 20,
'friction' : 1.0

        }

        this.Body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(myWorld,this.Body)
    }
    display(){
        var pos=this.Body.position;
        var angle=this.Body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTRE);
        strokeWeight(4);
        stroke("black");
        fill("red");
        rect(0,0,this.width,this.height);
        pop();
    }
}