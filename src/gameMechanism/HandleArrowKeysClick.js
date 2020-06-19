import React, { useState } from 'react';
import { connect } from 'react-redux';
import KeyboardEventHandler from 'react-keyboard-event-handler';

import getAllMovesResults from './movement/getAllMoves';

import { endGame, setBoard, animateMovement } from '../actions/game';
import { boardMovementTime } from '../appConsts';
import { setBoardSize } from '../utils';



export const HandleArrowKeysClick = (props) => {
   const allMovesResults = getAllMovesResults(props);
   if(!allMovesResults) 
      props.endGame(); 
   
   const [isKeysDisabled, setIsKeysDisabled] = useState(false); 
   return (
      <KeyboardEventHandler
         isDisabled={isKeysDisabled}
         handleKeys={['left', 'right', 'up', 'down', 'space']}
         onKeyEvent={handleClick}
      />
   );

   function handleClick(key) {
      setIsKeysDisabled(true);
      setTimeout(() => setIsKeysDisabled(false), boardMovementTime * 1.1);

      if (key === 'space')
         return setBoardSize();

      const moveResult = allMovesResults[key];
      if (moveResult)
         moveResult.execute();
   }
};



const mapStateToProps = (state) => ({
   board: state.game.board
});

const mapDispatchToProps = (dispatch) => ({
   setBoard: (newBoard, scoreAddition, newCellsPos) => {
      dispatch(setBoard(newBoard, scoreAddition, newCellsPos))
   },
   animateMovement: (posChanges) => dispatch(animateMovement(posChanges)),
   endGame: () => dispatch(endGame())
});

export default connect(mapStateToProps, mapDispatchToProps)(HandleArrowKeysClick);

/*
import getTestBoard from './movement/getTestBoard';

 if (key === 't')
   return props.setBoard(getTestBoard(), 0);

   handleKeys={['left', 'right', 'up', 'down', 'space']}
*/