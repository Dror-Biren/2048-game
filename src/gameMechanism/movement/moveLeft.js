import { boardHeight } from '../../appConsts';
import { getInitMoveObj, getBoardWithoutSpaces, handleIfMerging } from './moveUtils';

export default board => {
   const moveObj = getInitMoveObj();
   const boardWithoutSpaces = getBoardWithoutSpaces(board, true);

   for (let i = 0; i < boardHeight; i++) {
      let mergingAmount = 0;
      let prvWasMerging = false;
      let cell;
      for (let j = 0; cell=boardWithoutSpaces[i][j]; j++) {
         let isMerging;
         if(!prvWasMerging)
            isMerging = handleIfMerging(boardWithoutSpaces, moveObj, i, j, true);

         const cellNewPos = '' + i + (j - mergingAmount);
         moveObj.addMovement(cell, cellNewPos, isMerging);

         if (isMerging)
            mergingAmount++;  

         prvWasMerging = isMerging;
      }
   }

   return moveObj;
}


