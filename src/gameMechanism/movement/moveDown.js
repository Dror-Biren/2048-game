import { boardHeight, boardWidth } from '../../appConsts';
import { getInitMoveObj, getBoardWithoutSpaces, handleIfMerging } from './moveUtils';

export default board => {
   const moveObj = getInitMoveObj();
   const boardWithoutSpaces = getBoardWithoutSpaces(board, false);

   for (let j = 0; j < boardWidth; j++) {
      let mergingAmount = 0;
      let prvWasMerging = false;

      let columnLength = 0;
      for(; boardWithoutSpaces[columnLength] && boardWithoutSpaces[columnLength][j]; columnLength++);

      for (let i = columnLength-1; i >= 0; i--) {
         let isMerging;
         if(!prvWasMerging)
            isMerging = handleIfMerging(boardWithoutSpaces, moveObj, i, j, false);
         
         if (isMerging)
            mergingAmount++;  

         const cellNewPos = '' + (i + boardHeight - columnLength + mergingAmount) + j;
         moveObj.addMovement(boardWithoutSpaces[i][j], cellNewPos, isMerging);
            
         prvWasMerging = isMerging;
      }
   }

   //sconsole.log(moveObj);
   return moveObj;
}