import React from 'react';
import { connect } from 'react-redux';

import { refreshePage } from '../utils';

export const RestartButton = ({ text, style }) => (
   <button
      className="restart-button"
      style={style}
      onClick={refreshePage}>
      {text}
   </button>
);

const mapStateToProps = (state) => ({
   style: state.sizes.restartButtonStyle
});

export default connect(mapStateToProps)(RestartButton);

//onMouseDown={(e) => e.preventDefault()}