class Ball {
    constructor(x, y) {
      var options = {
          'restitution':0.5,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.circle(x, y,50, options);
      this.width =50;
      this.height = 50;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      pos.x = mouseX
      pos.y = mouseY
     
      ellipse(pos.x, pos.y, this.width, this.height);
      
    }
  };