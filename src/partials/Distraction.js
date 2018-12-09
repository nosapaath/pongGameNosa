import { SVG_NS } from '../settings'; 

export class Distraction{
  constructor(radius, width, height, space){
    this.radius = radius; 
    this.boardWidth = width; 
    this.boardHeight = height;
    this.spaceBar = space;
    this.direction = 1;
    this.pong = new Audio('../public/sounds/smb_bump.wav');
    this.ping = new Audio('../public/sounds/smb_bump.wav');
    this.surprise = new Audio('../public/sounds/surprise.wav');
    this.resetBack();
    
  }
  
  wallSurprise(){
    const hitTop = (this.y - this.radius <= 0);
    const hitBottom = (this.y + this.radius >= this.boardHeight ); 
    const hitLeft = (this.x - this.radius <= 0)
    const hitRight = (this.x + this.radius >= this.boardWidth); 
    
    if(hitTop || hitBottom ){
      this.vy *= -1;
    } else if(hitLeft || hitRight){
      this.vx *= -1;
    }
  }

  paddleKill(paddle1,paddle2){
    if(this.vx > 0){
      const [left,, top, bottom] = paddle2.coordinates();
      const hit = (this.x + this.radius >= left) && (this.y <= bottom) && (this.y >= top);
      if(hit){
        paddle2.decreaseScore();
        //sound added 
      }
      //bounce
    } else {
      const [, right, top, bottom] = paddle1.coordinates();
      const hit = (this.x - this.radius <= right) && (this.y <= bottom) && (this.y >= top);
      //bounce
      if(hit){
        paddle1.decreaseScore();
        // this.pong.play();//sound added 
      }
    }
  }


  resetBack(){
    this.x = this.boardWidth/2;
    this.y = this.boardHeight/2;
    this.vy = 0;
    while (this.vy === 0){
      this.vy = Math.floor(Math.random()* 10 - 1);
    }
    this.vx = this.direction * (5 - Math.abs(this.vy));
  }

  render(svg, paddle1, paddle2){
    let circle = document.createElementNS(SVG_NS, 'circle'); 
    circle.setAttributeNS(null, 'r', this.radius);
    circle.setAttributeNS(null, 'cx', this.x);
    circle.setAttributeNS(null, 'cy', this.y);
    circle.setAttributeNS(null,'fill','red');
    this.wallSurprise();
    this.paddleKill(paddle1, paddle2);
    this.x = this.x + this.vx; 
    this.y = this.y + this.vy;
    svg.appendChild(circle)
  }
}

// class snow extends Ball{
//   constructor(radius, width, height){
//     super(radius, width, height);
//     let circle = document.createElementNS(SVG_NS, 'circle')
//   }
// }