import React, { Component } from 'react';
import { Main } from '../styled/Template';
import { Stage } from 'react-konva';
import { Board, Squares } from '../styled/TicTacToe';

class Home extends Component {
  state = {
    rows: 3
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

  move = () => {};

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
