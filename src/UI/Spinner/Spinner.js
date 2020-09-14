import React from 'react';

import classes from './Spinner.module.scss';
import sprite from '../../icons/sprite.svg';
import langSet from '../../main/main';

const Spinner = props => {

    const useTag = (svg) => {
        return `<use xlink:href=${sprite}#${svg}></use>`
    };

    const showMessage = () => {
        if (!props.data) return langSet[props.lang].loader.data;
        else if (props.data) return langSet[props.lang].loader.forc;
    }
    
    return (
        <div className={classes.Spinner}>
            <div>
                <svg dangerouslySetInnerHTML={{__html: useTag('arrows_anticlockwise_dashed')}} />
                <span>{showMessage()}</span>
            </div>
        </div>
    );
};

export default Spinner;