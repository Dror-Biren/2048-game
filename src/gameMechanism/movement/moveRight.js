import { boardHeight, boardWidth } from '../../appConsts';
import { getInitMoveObj, getBoardWithoutSpaces, handleIfMerging } from './moveUtils';

export default board => {
   const moveObj = getInitMoveObj();
   const boardWithoutSpaces = getBoardWithoutSpaces(board, true);

   for (let i = 0; i < boardHeight; i++) {
      let mergingAmount = 0;
      let prvWasMerging = false;

      let rowLength = 0;
      for(; boardWithoutSpaces[i][rowLength]; rowLength++);
      for (let j = rowLength-1; j >= 0; j--) {
         let isMerging;
         if(!prvWasMerging)
            isMerging = handleIfMerging(boardWithoutSpaces, moveObj, i, j, true);
         if (isMerging)
            mergingAmount++;  

         const cellNewPos = '' + i + (j + boardWidth - rowLength + mergingAmount);
         moveObj.addMovement(boardWithoutSpaces[i][j], cellNewPos, isMerging);
            
         prvWasMerging = isMerging;
      }
   }

   return moveObj;
}


/*
import { boardHeight, boardWidth } from '../../appConsts';

export default board => {
   const movementsAnimation = {};
   const addMovement = (cell, posDestination) => {
      if (cell.originalPos !== posDestination)
         movementsAnimation[cell.originalPos] = posDestination;
   }

   const boardWithoutSpaces = [];
   for (let i = 0; i < boardHeight; i++) {
      boardWithoutSpaces[i] = [];

      for (let j = 0; j < boardWidth; j++)
         if (board[i][j])
            boardWithoutSpaces[i].push({
               value: board[i][j],
               originalPos: '' + i + j
            });
   }

   for (let i = 0; i < boardHeight; i++) {
      let mergingAmount = 0;
      for (let j = boardWithoutSpaces[i].length - 1; j >= 0; j--) {
         const curCell = boardWithoutSpaces[i][j];
         const prvCell = boardWithoutSpaces[i][j - 1];
         //console.log({thisCell: curCell, nextCell: prvCell});

         addMovement(curCell, '' + i + (j + boardWidth - boardWithoutSpaces[i].length + mergingAmount));
         if (prvCell && curCell.value === prvCell.value) {
            curCell.value = null;
            prvCell.value *= 2;
            mergingAmount++;
         }
      }
   }

   const finalBoard = [];
   for (let i = 0; i < boardHeight; i++) {
      finalBoard[i] = [];
      for (let j = 0; j < boardWithoutSpaces[i].length; j++) {
         const { value } = boardWithoutSpaces[i][j];
         if (value)
            finalBoard[i].push(value);
      }
   }

   for (let i = 0; i < boardHeight; i++)
      for (let j = finalBoard[i].length; j < boardWidth; j++)
         finalBoard[i].unshift(null);

   //console.log(movementsAnimation);
   return {
      newBoard: finalBoard,
      movementsAnimation
   };
}
*/