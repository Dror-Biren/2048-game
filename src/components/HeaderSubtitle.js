import React from 'react';
import { connect } from 'react-redux';

import RestartButton from './RestartButton';

export const HeaderSubtitle = ({ subtitleStyle }) => (
      <div className="subtitle">
         <div className="subtitle-texts">
            <h3 style={subtitleStyle.h3}>
               Play 2048 Game Online
            </h3>
            <p style={subtitleStyle.p}>
               Join the numbers and get to the <strong>2048 tile!</strong>
            </p>
         </div>
         <RestartButton text="New game"/>
      </div>

);

const mapStateToProps = (state) => ({
   subtitleStyle: state.sizes.subtitleStyle
});

export default connect(mapStateToProps)(HeaderSubtitle);







