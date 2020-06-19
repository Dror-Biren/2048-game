import React from 'react';
import { connect } from 'react-redux';

import EndOfGameMessage from './EndOfGameMessage';
import BoardContent from './BoardContent';
import BoardBackground from './BoardBackground';


export const Board = ({ isGameOver, padding }) => {
   const endGameMessege = (
      isGameOver &&
      <EndOfGameMessage />
   );

   const boardStyle = {
      opacity: isGameOver ? 0.5 : 1,
      padding
   };

   return (
      <div className="board-container">
         {endGameMessege}
         <div
            className="board"
            style={boardStyle}>
            <BoardContent />
            <BoardBackground />
         </div>

      </div>
   )
};

const mapStateToProps = (state) => ({
   isGameOver: state.game.isGameOver,
   padding: state.sizes.cell.margin
});

export default connect(mapStateToProps)(Board);


/*
const cellsBackground = board.map(createRowBackground);

const createCellBackground = (value, index) => (
   <div
      key={index}
      className="board-cell-background"
   />
);

const createRowBackground = (row, index) => (
   <div
      className="board-row-background"
      key={index}>
      {row.map(createCellBackground)}
   </div>
);
*/




