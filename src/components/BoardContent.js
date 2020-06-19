import React from 'react';
import { connect } from 'react-redux';

import CellContent from './CellContent';

function getAnimationClass(isNewGame, isNewCell) {
   if (isNewGame)
      return "cell-atNewGame";
   if (isNewCell)
      return "new-cell-animation";
}

function getCellsContent({ board, boardPositionsMap, animateChanges, newCellsPos, isNewGame }) {
   const cellsContent = [];
   for (let i = 0; i < board.length; i++)
      for (let j = 0; j < board[i].length; j++) {
         const value = board[i][j];

         const cellPos = '' + i + j;
         const isNewCell = newCellsPos.includes(cellPos);

         const transitionProperty = animateChanges ? "all" : "none";
         const position = boardPositionsMap[i][j];
         const cellData = { value, position, transitionProperty };

         cellsContent.push(
            <CellContent
               animaionClass={value && getAnimationClass(isNewGame, isNewCell)}
               cellData={cellData}
               key={i + '|' + j}
            />
         );
      }

   return cellsContent;
}


export const BoardContent = (props) => (
   <div className="cells-content-container">
      {getCellsContent(props)}
   </div>
);

const mapStateToProps = (state) => ({
   board: state.game.board,
   boardPositionsMap: state.game.boardPositionsMap,
   animateChanges: state.game.animateChanges,
   newCellsPos: state.game.newCellsPos,
   isNewGame: state.game.isNewGame
});

export default connect(mapStateToProps)(BoardContent);
