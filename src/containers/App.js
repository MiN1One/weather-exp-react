import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import classes from './App.module.scss';
import Toolbar from './Toolbar/Toolbar';
import Data from './Data/Data';
import Footer from '../components/Footer/Footer';
import * as actions from '../store/actions/index';

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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
