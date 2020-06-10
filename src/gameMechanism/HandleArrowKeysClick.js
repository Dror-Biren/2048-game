import React from 'react';
import { connect } from 'react-redux';
import KeyboardEventHandler from 'react-keyboard-event-handler';

import moveLeft from './movement/moveLeft';
import moveRight from './movement/moveRight';
import moveUp from './movement/moveUp';
import moveDown from './movement/moveDown';
import addRandomCell from './addRandomCell';


import { setBoard, startNewGame } from '../actions/game';
import { setBoardSize } from '../appConsts';


export const HandleArrowKeysClick = ({ board, setBoard }) => {
   return (
      <KeyboardEventHandler
         handleKeys={['left', 'right', 'up', 'down', 'space']}
         onKeyEvent={handleClick}
      />
   );

   function handleClick(key) {
      if (key === 'space') {
         setBoardSize();
         return props.startNewGame();
      }

      const boardAfterMoved = moveBoardByKey(key);
      const finalBoard = addRandomCell(boardAfterMoved);
      setBoard(finalBoard);
   }

   function moveBoardByKey(key) {
      switch(key) {
         case 'left': return moveLeft(board); 
         case 'right': return moveRight(board); 
         case 'up': return moveUp(board); 
         case 'down': return moveDown(board);     
      }
   }
};



const mapStateToProps = (state) => ({
   board: state.game.board
});

const mapDispatchToProps = (dispatch) => ({
   setBoard: (newBoard) => dispatch(setBoard(newBoard)),
   startNewGame: () => dispatch(startNewGame())
});

export default connect(mapStateToProps, mapDispatchToProps)(HandleArrowKeysClick);