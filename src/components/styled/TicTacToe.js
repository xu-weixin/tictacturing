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
  return (
    <Layer>
      <Text />
    </Layer>
  );
};
