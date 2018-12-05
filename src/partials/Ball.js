import { SVG_NS } from '../settings'; 

export class Ball{
  constructor(radius, width, height){
    this.radius = radius; 
    this.boardWidth = width; 
    this.boardHeight = height;
    this.reset();
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