import React from 'react';

import './IntroMessage.scss';
import sprite from '../../icons/sprite.svg';
import langSet from '../../main/main';

const IntroMessage = (props) => {

    const useTag = (svg) => {
        return `<use xlink:href=${sprite}#${svg}></use>`
    };

    const features = langSet[props.lang].intro_about.features.map((el, i) => {
        return (
            <li key={i}>{el}</li>
        )
    });

    return (
        <div className="IntroMessage">
            <div className="IntroMessage__container">
                <div className="IntroMessage__main">
                    <p>WeatherApp</p>
                    <span className="IntroMessage__about" dangerouslySetInnerHTML={{__html: langSet[props.lang].intro_about.main}} />
                    <a href="https://github.com/MiN1One/weather-exp-react" className="IntroMessage__about">{langSet[props.lang].intro_about.srcCode}</a>
                </div>
                <div className="IntroMessage__hint">
                    <svg dangerouslySetInnerHTML={{__html: useTag('basic_pin2')}}/>
                    <span>{langSet[props.lang].intro_about.plsSearch}</span>
                </div>
                <ul className="IntroMessage__features">
                    {features}
                </ul>
                <p className="IntroMessage__notes">{langSet[props.lang].intro_about.note}</p>
            </div>
        </div>
    )
};

export default IntroMessage;