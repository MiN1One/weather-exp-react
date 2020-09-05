import React from 'react';

import classes from './NavLeft.module.scss';
import Dropdown from '../../../components/Dropdown/Language/Language';
import Logo from '../../../components/Logo/Logo';
import UnitChanger from '../../../components/Dropdown/UnitChanger/UnitChanger';

const NavLeft = props => {

    return (
        <div className={classes.NavLeft}>
            <Logo />
            <Dropdown />
            <UnitChanger />
        </div>
    )
};

export default NavLeft;