import React from 'react';
import { connect } from 'react-redux';

import { getCellStyle } from '../styles/components/cellStyle';


export const Board = ({board}) => {
   let keyIndex = 0;

   const creatJsxCell = (value) => {
      return (
         <td
            key={keyIndex++}
            className="board-cell"
            style={getCellStyle(value)}>
            <h2 className="gameNumber">
               {value}
            </h2>
         </td>
      );
   };

   const creatJsxRow = (row) => (
      <tr
         className="board-row"
         key={keyIndex++}>
         {row.map(creatJsxCell)}
      </tr>
   );

   return (
      <table className="board-container">
         <tbody className="board">
            {board.map(creatJsxRow)}
         </tbody>
      </table>
   );
};

const mapStateToProps = (state) => ({
   board: state.game.board
});

export default connect(mapStateToProps)(Board);




