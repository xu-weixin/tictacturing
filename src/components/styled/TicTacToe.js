import React from 'react';
import { Layer, Line, Text } from 'react-konva';

export const Board = ({ units, size, rows }) => {
  let grid = [];
  let stroke = 'grey';
  let strokeWidth = 10;
  for (let i = 1; i < rows; i++) {
    let position = units * i;
    grid.push(
      <Line
        points={[position, 0, position, size]}
        stroke={stroke}
        strokeWidth={strokeWidth}
        key={i + 'v'}
      />
    );
    grid.push(
      <Line
        points={[0, position, size, position]}
        stroke={stroke}
        strokeWidth={strokeWidth}
        key={i + 'h'}
      />
    );
  }
  return <Layer>{grid}</Layer>;
};

export const Squares = ({
  units,
  coordinates,
  gameState,
  win,
  gameOver,
  yourTurn,
  ownMark,
  move
}) => {
  const squares = coordinates.map((coordinate,index) => {
    let makeMove = move;
    let mark = gameState[index];
    let fill = 'black';
    if(win && win.includes(index)) {
      fill = 'lightgreen';
    }
    if(gameOver || !yourTurn || mark) {
      makeMove = () => console.log('Nope!');
    }
    return <Text
      key={index}
      index={index}
      x={coordinate[0]}
      y={coordinate[1]}
      fontSize={units}
      width={units}
      text={mark}
      fill={fill}
      fontFamily="Helvetica"
      align="center"
      onClick={event => {
        const index=event.target.index;
        makeMove(ownMark,index);
      }}
    />
  });
  return (
    <Layer>
      {squares}
    </Layer>
  );
};
