class Stone{
  constructor(x, y, w, h) {
    let options = {
      restitution: 0.8
    };

    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    this.color = color;
    this.image =  loadImage("assets/stone.png");
   //this.scale = scale
    World.add(world, this.body);
  }

    show() {
      let pos = this.body.position;
      push();
      image(this.image, 0, 0, this.w, this.h);
      translate(pos.x, pos.y);
      strokeWeight(1);
      fill("white");
      ellipseMode(CENTER);
      ellipse(0, 0, this.w, this.h);
      noStroke();
      pop();
    }
}