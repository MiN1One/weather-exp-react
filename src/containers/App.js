import React from 'react';

import classes from './App.module.scss';
import Toolbar from './Toolbar/Toolbar';
import Data from './Data/Data';
import Footer from '../components/Footer/Footer';

function App() {
  
  return (
    <div className={classes.App}>
      <div className={classes.row}>
        <Toolbar />
        <Data />
        <Footer />
      </div>
    </div>
  );
};

export default App;
