import moveLeft from './moveLeft';
import moveRight from './moveRight';
import moveUp from './moveUp';
import moveDown from './moveDown';

import addRandomCell from '../addRandomCell';
import { boardMovementTime } from '../../appConsts';


export default ({board, setBoard, animateMovement}) => {
   const allMovesResults = {
      'left': moveLeft(board),
      'right': moveRight(board),
      'up': moveUp(board),
      'down': moveDown(board)
   };

   let noLegalMove = true;
   for (const key in allMovesResults) {
      const { newBoard, movementsAnimation, mergingsScore, mergingsPositions } = allMovesResults[key];
      if (Object.keys(movementsAnimation).length === 0)
         allMovesResults[key] = undefined;
      else {
         noLegalMove = false;
         allMovesResults[key].execute = () => {
            //console.log({newBoard});
            const newCellPos = addRandomCell(newBoard);
            const newCellsPos = [newCellPos, ...mergingsPositions];
      
            const changeBoard = () => {
               setBoard(newBoard, mergingsScore, newCellsPos);
            }
      
            animateMovement(movementsAnimation);
            setTimeout(changeBoard, boardMovementTime);
         };
      }
   }

   if (noLegalMove)
      return undefined;
   
   return allMovesResults;
}

/*
const { newBoard, movementsAnimation } = moveResult;
      //console.log({newBoard});
      const { newCellsPos, scoreAddition } = addRandomCell(newBoard);

      const changeBoard = () => {
         setBoard(newBoard, scoreAddition);
      }

      animateMovement(movementsAnimation, newCellsPos, newCellsPos);
      setTimeout(changeBoard, boardMovementTime * 1000);
*/