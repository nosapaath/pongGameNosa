import { SVG_NS } from '../settings'; 


export class Ball{
  constructor(radius, width, height, space){
    this.radius = radius; 
    this.boardWidth = width; 
    this.boardHeight = height;
    this.spaceBar = space;
    this.direction = 1;

    this.reset();
    document.addEventListener('keydown', event => {
      switch(event.key){
        case this.spaceBar:
        this.reset();
        break;
      }
    });
  }
  wallCollision(){
    const hitLeft = (this.x - this.radius <= 0); 
    const hitRight = (this.x + this.radius >= this.boardWidth); 
    const hitTop = (this.y - this.radius <= 0);
    const hitBottom = (this.y + this.radius >= this.boardHeight ); 

    if(hitTop || hitBottom){
      this.vy *= -1;
    } else if (hitLeft || hitRight){
      this.vx *= -1;
    }
  }

  reset(){
    this.x = this.boardWidth/2;
    this.y = this.boardHeight/2;
    this.vy = 0;
    while (this.vy === 0){
      this.vy = Math.floor(Math.random()* 10 - 5);
    }
    this.vx = this.direction * (6 - Math.abs(this.vy));
  }
  render(svg){
    let circle = document.createElementNS(SVG_NS, 'circle'); 
    circle.setAttributeNS(null, 'r', this.radius);
    circle.setAttributeNS(null, 'cx', this.x);
    circle.setAttributeNS(null, 'cy', this.y);
    circle.setAttributeNS(null,'fill','white');
    this.wallCollision();
    this.x = this.x + this.vx; 
    this.y = this.y + this.vy;

    
    svg.appendChild(circle)
  }
}