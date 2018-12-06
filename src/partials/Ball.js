import { SVG_NS } from '../settings'; 


export class Ball{
  constructor(radius, width, height, space){
    this.radius = radius; 
    this.boardWidth = width; 
    this.boardHeight = height;
    this.spaceBar = space;
    this.reset();
    document.addEventListener('keydown', event => {
      switch(event.key){
        case this.spaceBar:
        // this.x = this.x + this.speed;
        // this.y = this.y + this.speed;
        this.y = Math.min(0, Math.floor(Math.random() * 10 - 5));
        this.x = Math.max(this.boardHeight, this.ballDirection * (6 - Math.abs(this.y))); 
        break;
      }
    });
  }
  reset(){
    this.x = this.boardWidth/2;
    this.y = this.boardHeight/2;
  }
  render(svg){
    let circle = document.createElementNS(SVG_NS, 'circle'); 
    circle.setAttributeNS(null, 'r', this.radius);
    circle.setAttributeNS(null, 'cx', this.x);
    circle.setAttributeNS(null, 'cy', this.y);
    circle.setAttributeNS(null,'fill','white');
    svg.appendChild(circle)
  }
}

// arigato
// storing <- o ->
// x speed and y speed 
// 