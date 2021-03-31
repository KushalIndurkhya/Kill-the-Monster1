class Hero{

    constructor(x,y,r){

    var options = {
density: 1,
frictionAir: 1
    }
    this.x=x;
    this.y=y;
    this.r=r;
    this.image=loadImage("images/Superhero-01.png")
    this.Body=Bodies.circle(this.x,this.y,(this.r)/2,options)
    World.add(myWorld,this.Body)
}

display(){
    this.image=(this.image,0,0,this.width,this.height)
}
}