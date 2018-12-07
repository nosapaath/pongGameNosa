import { SVG_NS, KEYS} from '../settings';
import { Board } from './Board';
import { Paddle } from './Paddle';
import { Ball } from './Ball';
import { Score } from './Score';
import { Restart } from './Restart';


export default class Game {

	constructor(element, width, height) {
		this.element = element;
		this.width = width;
		this.height = height; 

		this.pause = false;

		this.paddleWidth = 8 ;
    this.paddleHeight = 56;
		this.boardGap = 10;
		this.ballRadius = 8;
		this.speed = 10;
		this.ballDirection = 1;

		this.scoreFontSize = 38;

		
		this.ball = new Ball (this.ballRadius, this.width, this.height, KEYS.spaceBar);
		
		this.gameElement = document.getElementById(this.element);

		this.board = new Board(this.width, this.height);
		
		this.paddle1 = new Paddle(this.height,this.paddleWidth, this.paddleHeight, this.boardGap, ((this.height - this.paddleHeight)/2), KEYS.a, KEYS.z);

		this.paddle2 = new Paddle(this.height,this.paddleWidth, this.paddleHeight, (this.width - this.paddleWidth - this.boardGap), ((this.height - this.paddleHeight)/2), KEYS.UP,KEYS.DOWN);
		
		this.score1 = new Score((this.width/4),30, this.scoreFontSize);
		this.score2 = new Score((3*(this.width/4)),30, this.scoreFontSize);
		document.addEventListener('keydown', event => {
      switch(event.key){
        case KEYS.spaceBar:
				this.pause = !this.pause;
				break;
      }
    });

		this.restart = new Restart('0', (this.height/2), (this.scoreFontSize));
		this.restartSong = new Audio('../public/sounds/smb_stage_clear.wav');
		
	
	}

	render() {
		if(this.pause){
			return;
		}
		this.gameElement.innerHTML = '';
		let svg = document.createElementNS(SVG_NS,'svg');
		svg.setAttributeNS(null, 'width', this.width); 
		svg.setAttributeNS(null, 'height', this.height);
		svg.setAttributeNS(null, 'viewBox', `0 0 ${this.width} ${this.height}`);
		this.gameElement.appendChild(svg);
		
		this.board.render(svg);
		this.paddle1.render(svg, this.paddle2);
		this.paddle2.render(svg, this.paddle1);
		this.ball.render(svg, this.paddle1, this.paddle2);
		this.score1.render(svg, this.paddle1.getScore());
		this.score2.render(svg, this.paddle2.getScore());
		
		if(this.paddle1.score === 5 || this.paddle2.score === 5  ){
			this.pause = true;
			this.restart.render(svg, this.paddle1, this.paddle2)
			this.restartSong.play();
		}
	}
}	