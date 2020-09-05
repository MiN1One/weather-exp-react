import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import classes from './App.module.scss';
import Toolbar from './Toolbar/Toolbar';
import Data from './Data/Data';
import Footer from '../components/Footer/Footer';
import * as actions from '../store/actions/index';

function App(props) {

  useEffect(() => {
    props.readStorage();
  }, []);

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

const mapStateToProps = (state) => {
  return {
    lang: state.data.lang,
    search: state.data.search,
    units: state.data.metric,
    searchHistory: state.data.history
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    readQueryOnLoad: (query) => dispatch(actions.readQuery(query)),
    performSearchWithQuery: (lang, units, search) => dispatch(actions.performSearch(lang, units, search)),
    readStorage: () => dispatch(actions.readStore())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
