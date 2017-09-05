import React, { Component } from 'react';
import { Main } from '../styled/Template';
import { Stage } from 'react-konva';
import { Board, Squares } from '../styled/TicTacToe';

class Home extends Component {

	constructor(props){
		super(props);
		this.combos = [
			[0,1,2],
			[3,4,5],
			[6,7,8],
			[0,3,6],
			[1,4,7],
			[2,5,8],
			[0,4,8],
			[2,4,6]
		];
	}

  state = {
    rows: 3,
    gameState: new Array(9).fill(false),
    ownMark:'X',
    otherMark:'O',
    gameOver: false,
    yourTurn: true,
    winner: false,
    win: false
  };

  componentWillMount() {
    let height = window.innerHeight;
    let width = window.innerWidth;
    let size = height < width ? height * 0.8 : width * 0.8;
    let rows = this.state.rows;
    let units = size / rows;

    let coordinates = [];
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < rows; x++) {
        coordinates.push([x * units, y * units]);
      }
    }

    this.setState({
      rows,
      size,
      units,
      coordinates,
      move: this.move
    });
  }

  makeAImove = (gameState) => {
  	const otherMark = this.state.otherMark;
  	const openSquares = [];
  	gameState.forEach((square,index) => {
  		if(!square) {
  			openSquares.push(index);
  		}
  	});
  	const aiMove = openSquares[this.random(0,openSquares.length)];
  	this.move(otherMark,aiMove);
  }

  move = (marker,index) => {
  	this.setState((prevState,props)=>{
  		let {gameState,yourTurn,gameOver,winner} = prevState;
  		yourTurn = !yourTurn;
  		gameState.splice(index,1,marker);
  		const foundWin = this.winChecker(gameState);
  		if(foundWin){
  			winner = gameState[foundWin[0]];
  		}
  		// 游戏结束条件
  		if(foundWin || !gameState.includes(false)){
  			gameOver = true;
  		}
  		if(!yourTurn && !gameOver){
  			setTimeout(()=>{
  				this.makeAImove(gameState);
  			},1000);
  		}
  		return {
  			gameState,
  			yourTurn,
  			gameOver,
  			win: foundWin || false,
  			winner
  		}
  	});
  };

  random = (min,max)=>{
  	min = Math.ceil(min);
  	max = Math.floor(max);
  	return Math.floor(Math.random() * (max-min)) + min;
  }

  winChecker = (gameState) => {
  	let combos = this.combos;
  	return combos.find(combo=>{
  		let [a,b,c] = combo;
  		return gameState[a] === gameState[b] && gameState[a] === gameState[c] && gameState[a]
  	})
  }

  render() {
    const { size } = this.state;
    return (
      <Main>
        <Stage width={size} height={size}>
          <Board {...this.state} />
          <Squares {...this.state} />
        </Stage>
      </Main>
    );
  }
}

export default Home;
