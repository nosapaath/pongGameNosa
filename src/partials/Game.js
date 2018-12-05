import { SVG_NS, KEYS} from '../settings';
import { Board } from './Board';
import { Paddle } from './Paddle';
import { Ball } from './Ball';

export default class Game {

	constructor(element, width, height) {
		this.element = element;
		this.width = width;
		this.height = height; 
		this.paddleWidth = 8 ;
    this.paddleHeight = 56;
		this.boardGap = 10;
		this.ballRadius = 8;
		
		this.ball = new Ball (this.ballRadius, this.width, this.height);
		
		this.gameElement = document.getElementById(this.element);

		this.board = new Board(this.width, this.height);
		
		this.paddle1 = new Paddle(this.height,this.paddleWidth, this.paddleHeight, this.boardGap, ((this.height - this.paddleHeight)/2), KEYS.a,KEYS.z);

    this.paddle2 = new Paddle(this.height,this.paddleWidth, this.paddleHeight, (this.width - this.paddleWidth - this.boardGap), ((this.height - this.paddleHeight)/2), KEYS.UP,KEYS.DOWN);
		// Other code goes here...

		
	}

	render() {
		this.gameElement.innerHTML = '';
		let svg = document.createElementNS(SVG_NS,'svg');
		svg.setAttributeNS(null, 'width', this.width); 
		svg.setAttributeNS(null, 'height', this.height);
		svg.setAttributeNS(null, 'viewBox', `0 0 ${this.width} ${this.height}`);
		this.gameElement.appendChild(svg);
		
		this.board.render(svg);
		this.paddle1.render(svg);
		this.paddle2.render(svg);
		this.ball.render(svg);
	}

}

// const board = new Board(width, height);
// 		const ball = new Ball(256,128);//starting position of ball always middle. 
// 		const paddle1 = new Paddle(controlUp, controlDown, x, y, width, height); 
// 		const paddle2 = new Paddle(controlUp, controlDown, x, y, width, height);
		
// 		