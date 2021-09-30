class Ground {
    constructor(x, width, height) {
        var options = { isStatic: true }
        this.body = Bodies.rectangle(x, 487, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("assets/bg.jpg")
        World.add(world, this.body);

    }
    display() {
        var pos = this.body.position;

        rectMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y)
        imageMode(CENTER)
        rect(pos.x, pos.y, this.width, this.height)
    }
}
