import { boardHeight, boardWidth  } from '../../appConsts';
import { getInitMoveObj, getBoardWithoutSpaces, handleIfMerging } from './moveUtils';

export default board => {
   const moveObj = getInitMoveObj();
   const boardWithoutSpaces = getBoardWithoutSpaces(board, false);
   //console.log(boardWithoutSpaces);

   for (let j = 0; j < boardWidth; j++) {
      let mergingAmount = 0;
      let prvWasMerging = false;
      let cell;
      for (let i = 0; (i<boardHeight) && (cell=boardWithoutSpaces[i][j]); i++) {
         let isMerging;
         if(!prvWasMerging)
            isMerging = handleIfMerging(boardWithoutSpaces, moveObj, i, j, false);

         const cellNewPos = '' + (i - mergingAmount) + j;
         moveObj.addMovement(cell, cellNewPos, isMerging);

         if (isMerging)
            mergingAmount++;  

         prvWasMerging = isMerging;
      }
   }

   //console.log(moveObj);
   return moveObj;
}

