class Net {
    constructor() {
        var options = {
            'restitution': 0.8,
            'friction': 1.0,
            'density': 1.0
        }
        this.x = 400
        this.y = 300
        this.width = 50
        this.height = 50
        this.body = Bodies.rectangle(400, 360, 50, 50, options);
        World.add(world, this.body)
    }
    display() {
        push();
        translate(this.body.position.x, this.body.position.y);
        rect(0, 0, 50, 50)
        pop();
    }
}