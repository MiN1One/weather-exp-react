import React, { useState, useEffect } from 'react';

import NavLeft from './NavLeft/NavLeft';
import classes from './Toolbar.module.scss';
import NavRight from './NavRight/NavRight';
import Searchbar from '../../components/Searchbar/Searchbar';
import MobileToolbar from '../MobileToolbar/MobileToolbar';

const Toolbar = () => {

    const media = matchMedia('(max-width: 53.125em)');

    useEffect(() => {
        switchToolbar(media);
    }, []);

    const [mediaOn, setMediaOn] = useState(false);

    const switchToolbar = (media) => {
        if (media.matches) setMediaOn(true);
        else setMediaOn(false);
    };
    
    media.addListener(switchToolbar);
    
    return (
        <div className={classes.Toolbar}>
            {mediaOn ? <MobileToolbar /> : <NavLeft />}
            <Searchbar />
            {mediaOn ? null : <NavRight />}
        </div>
    );
};

export default React.memo(Toolbar);