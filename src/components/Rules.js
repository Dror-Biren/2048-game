import React from 'react';
import { connect } from 'react-redux';

export const Rules = ({ style }) => (
   <p style={style.all}>
      <strong style={style.title}> HOW TO PLAY: </strong> 
      Use your 
      <strong> arrow keys </strong>
      to move the tiles. When two tiles with the same number touch, they
      <strong> merge into one! </strong>
   </p>
);

const mapStateToProps = (state) => ({
   style: state.sizes.rulesStyle
});

export default connect(mapStateToProps)(Rules);
