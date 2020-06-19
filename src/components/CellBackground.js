import React from 'react';
import { connect } from 'react-redux';

const getStyle = ({size, margin}) => ({
   width: size,
   height: size,
   margin
})

export const CellBackground = ({ cellSizes }) => (
   <div
      className="board-cell-background"
      style={getStyle(cellSizes)}
   />
);


const mapStateToProps = (state) => ({
   cellSizes: state.sizes.cell
});

export default connect(mapStateToProps)(CellBackground);