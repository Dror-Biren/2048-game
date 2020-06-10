import React from 'react';

import Header from './Header';
import Board from './Board';
import Rules from './Rules';
import HandleArrowKeysClick from '../gameMechanism/HandleArrowKeysClick';

const DashboardPage = () => (
   <div className="pageContent">
      <Header />
      <Board />
      <Rules />

      <HandleArrowKeysClick />
   </div>
);

export default DashboardPage;
