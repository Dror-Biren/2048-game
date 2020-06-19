import React from 'react';
import { connect } from 'react-redux';

import HeaderTitle from './HeaderTitle';
import HeaderSubtitle from './HeaderSubtitle';


export const Header = ({ headerStyle }) => (
   <div style={headerStyle}>
      <HeaderTitle />
      <HeaderSubtitle />     
   </div>
);

const mapStateToProps = (state) => ({
   headerStyle: state.sizes.headerStyle
});

export default connect(mapStateToProps)(Header);


//className="header"





