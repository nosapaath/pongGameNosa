import { SVG_NS} from '../settings';

export class Board {
  constructor(x, y){
    this.x = x; 
    this.y = y;
  }
  render(svg, paddle){
    
    let line = document.createElementNS(SVG_NS,'line');
    line.setAttributeNS(null,'x1',(this.width/2));
    line.setAttributeNS(null,'x2',(this.width/2));
    line.setAttributeNS(null,'y1',0);
    line.setAttributeNS(null,'y2',this.height);
    line.setAttributeNS(null,'stroke','white');
    line.setAttributeNS(null,'stroke-dasharray','5, 10');
    line.setAttributeNS(null,'stroke-width','4');

    svg.appendChild(line);
  }
}