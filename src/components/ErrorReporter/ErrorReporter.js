import React from 'react';

import './ErrorReporter.scss';
import sprite from '../../icons/sprite.svg';
import langSet from '../../main/main';

const ErrorReporter = (props) => {

    const useTag = (svg) => {
        return `<use xlink:href=${sprite}#${svg}></use>`
    };
    
    const reasons = langSet[props.lang].error.someerr_res.map((el, i) => {
        return (
            <li key={i}>{el}</li>
        )
    });

    let error;

    if (props.someError) error = (
        <div className="ErrorReporter">
            <div className="ErrorReporter__container">
                <div className="ErrorReporter__main">
                    <svg dangerouslySetInnerHTML={{__html: useTag.call(null, 'basic_exclamation')}} />
                    <p>{langSet[props.lang].error.someerr_main}</p>
                </div>
                <p className="ErrorReporter__sub ErrorReporter__reasons">{langSet[props.lang].error.someerr_sub}</p>
                <ul>
                    {reasons}
                </ul>
            </div>
        </div>
    ); 
    
    else if (props.invalidInput) error = (
        <div className="ErrorReporter">
            <div className="ErrorReporter__container">
                <div className="ErrorReporter__main">
                    <svg dangerouslySetInnerHTML={{__html: useTag.call(null, 'basic_exclamation')}} />
                    <p>{langSet[props.lang].error.inv_input_main}</p>
                </div>
                <p className="ErrorReporter__sub">{langSet[props.lang].error.inv_input_sub}</p>
            </div>
        </div>
    );

    else if (props.notFound) error = (
        <div className="ErrorReporter">
            <div className="ErrorReporter__container">
                <div className="ErrorReporter__main">
                    <svg dangerouslySetInnerHTML={{__html: useTag.call(null, 'basic_exclamation')}} />
                    <p>{langSet[props.lang].error.notfound_main}</p>
                </div>
                <p className="ErrorReporter__sub">{langSet[props.lang].error.notfound_sub}</p>
            </div>
        </div>
    );

    return error;
};

export default ErrorReporter;