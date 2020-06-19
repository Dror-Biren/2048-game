import React from 'react';
import { connect } from 'react-redux';

import RestartButton from './RestartButton';

export const EndOfGameMessage = ({style}) => (
   <div className="endGameMessage" style={style}>
      <h1>
         Game over!
      </h1>
      <RestartButton text="Try again"/>
   </div>
);

const mapStateToProps = (state) => ({
   style: state.sizes.endOfGameStyle
});

export default connect(mapStateToProps)(EndOfGameMessage);


