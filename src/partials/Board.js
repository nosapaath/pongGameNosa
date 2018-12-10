import { SVG_NS} from '../settings';

export class Board {
  constructor(width, height){
    this.width = width; 
    this.height = height;
  }
  render(svg){
    let rect = document.createElementNS(SVG_NS, 'rect');
    rect.setAttributeNS(null,'width',this.width);
    rect.setAttributeNS(null,'height',this.height);
    rect.setAttributeNS(null,'fill', 'black');

    let path = document.createElementNS(SVG_NS, 'path');
    path.setAttributeNS(null, 'd', 'm195.8 17.933c23.3 0 42.2 98.3 42.2 219.7h34c0-130.7-34.3-236.5-76.3-236.5-24 0-45.2 31.7-59.2 81.5-14-49.8-35.2-81.5-59-81.5-42 0-76.2 105.7-76.2 236.4h34c0-121.4 18.7-219.6 42-219.6s42.2 90.8 42.2 202.8h33.8c0-112 19-202.8 42.3-202.8');
    path.setAttributeNS(null, 'fill', '#fc0');
    path.setAttributeNS(null, 'transform', 'translate(120 10)');

    

    
    let line = document.createElementNS(SVG_NS,'line');
    line.setAttributeNS(null,'x1',(this.width/2));
    line.setAttributeNS(null,'x2',(this.width/2));
    line.setAttributeNS(null,'y1',0);
    line.setAttributeNS(null,'y2',this.height);
    line.setAttributeNS(null,'stroke','white');
    line.setAttributeNS(null,'stroke-dasharray','5, 10');
    line.setAttributeNS(null,'stroke-width','4');

    
    svg.appendChild(rect);
    svg.appendChild(path);
    svg.appendChild(line);
    
  }
}
