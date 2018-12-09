import { SVG_NS} from '../settings';


export class Restart{
  constructor(x,y,size){
    this.x = x; 
    this.y = y;
    this.size = size;
  }

  render(svg){
    let text = document.createElementNS(SVG_NS, 'text');
    text.setAttributeNS(null,'x',this.x);
    text.setAttributeNS(null,'y',this.y);
    text.setAttributeNS(null,'fill', 'white');
    text.setAttributeNS(null, 'font-size', this.size);
    text.textContent = 'spacebar to Restart';
    svg.appendChild(text);

  }
}
