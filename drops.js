class Drops {
    constructor(x,y) {
        this.x=x;
		this.y=y;
        this.body = Bodies.rectangle(x,y,10,10)
        World.add(world,this.body)
    }
    display() {
        var posX = this.body.position.x
        var posY = this.body.position.y
        push()
        translate(this.body.position.x,this.body.position.y)
        ellipseMode(CENTER)
        ellipse(0,0,10)
        pop()
    }
}