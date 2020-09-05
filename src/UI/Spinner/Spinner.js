import React from 'react';

import classes from './Spinner.module.scss';
import sprite from '../../icons/sprite.svg';

const Spinner = props => {

    const useTag = (svg) => {
        return `<use xlink:href=${sprite}#${svg}></use>`
    };

    const showMessage = () => {
        if (props.lang === 'de') {
            if (!props.data) return 'Aktuelles Wetter abrufen ...';
            else if (props.data) return 'Prognose abrufen ...';
        } else {
            if (!props.data) return 'Fetching current weather ...';
            else if (props.data) return 'Retrieving forecast ...';
        }
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