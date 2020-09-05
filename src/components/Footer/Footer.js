import React from 'react';

import classes from './Footer.module.scss';

const Footer = () => (
        <footer className={classes.Footer}>
            <p>WeatherApp&copy; v2.0 2020.</p>
        </footer>
);

export default React.memo(Footer);
