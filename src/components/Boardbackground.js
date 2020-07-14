import React from 'react';

import CellBackground from './CellBackground';
import { boardHeight, boardWidth } from '../appConsts';

export default () => {
   const boardBackground = [];
   for (let i = 0; i < boardHeight; i++)
      boardBackground.push(
         <div
            className="board-row-background"
            key={i}>
            <RowBackground />
         </div>
      );
   return boardBackground; 
}

function RowBackground() {
   const rowBackground = [];
   for (let j = 0; j < boardWidth; j++)
      rowBackground.push(
         <CellBackground key={j}/>
      );
   return rowBackground;
}