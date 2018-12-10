import { SVG_NS, GAME} from '../settings';

export class Paddle {
  constructor(boardHeight, width, height, x, y, up, down){
    this.x = x;
    this.y = y;
    this.boardHeight = boardHeight; 
    this.width = width; 
    this.height = height; 
    this.up = up; 
    this.down = down;
    this.score = 0;
    this.slow = 0;


    document.addEventListener('keydown', event => {
      switch(event.key){
        case this.up:
        this.y = Math.max(0, this.y - GAME.speed - this.slow);
        this.color = '#fc0'; 
        break;
        case this.down:
        this.y = Math.min(this.boardHeight-this.height,this.y + GAME.speed - this.slow);
        this.color = '#fc0'; 
        break;
      }
    });
    
  }
  coordinates(){
    const leftX = this.x; 
    const rightX =this.x + this.width;
    const topY = this.y;
    const bottomY = this.y + this.height;
    return [leftX, rightX, topY, bottomY];
  }

  increaseScore(){
    this.score++;
  }

  slowDown(){
    this.height-= 1;
    this.slow++ ;
  }

  checkWinner(otra){
    while(this.score === 10){
      this.score = 0; 
      otra.score = 0;
    }
  }

  getScore(){
    return this.score;
  }

  render(svg, otra){
    let rect = document.createElementNS(SVG_NS, 'rect');
    rect.setAttributeNS(null,'width',this.width);
    rect.setAttributeNS(null,'height',this.height);
    rect.setAttributeNS(null,'fill', this.color);
    rect.setAttributeNS(null,'x', this.x);
    rect.setAttributeNS(null,'y', this.y);
    this.checkWinner(otra); //current solution to updating score back to 0 when a limit score is reached
    svg.appendChild(rect);
  }
}