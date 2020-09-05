import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../../store/actions';
import classes from './Logo.module.scss';

const Logo = props => (
    <Link to="/" className={classes.Logo} onClick={props.onClear}>Weather<span>App</span><span>&copy;</span></Link>
);

const mapDispatchToProps = dispatch => {
    return {
        onClear: () => dispatch(actions.clearData()),
    }
};

export default connect(null, mapDispatchToProps)(Logo);




