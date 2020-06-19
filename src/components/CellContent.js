import React from 'react';
import { connect } from 'react-redux';

import { getCellStyle } from '../styles/components/cellStyle';

export const CellContent = ({ cellData, animaionClass = '', sizes }) => (
   <div
      className={`cell-content ${animaionClass}`}
      style={getCellStyle({...cellData, ...sizes})}>
      {cellData.value}
   </div>
);

const mapStateToProps = (state) => ({
   sizes : state.sizes.cell
});

export default connect(mapStateToProps)(CellContent);

