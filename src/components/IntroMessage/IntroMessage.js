import React from 'react';

import './IntroMessage.scss';
import sprite from '../../icons/sprite.svg';
import en from '../../main/main_en';
import de from '../../main/main_de';

const IntroMessage = (props) => {

    const langSet = props.lang === 'de' ? de : en;

    const useTag = (svg) => {
        return `<use xlink:href=${sprite}#${svg}></use>`
    };

    const features = langSet.intro_about.features.map((el, i) => {
        return (
            <li key={i}>{el}</li>
        )
    });

    return (
        <div className="IntroMessage">
            <div className="IntroMessage__container">
                <div className="IntroMessage__main">
                    <p>WeatherApp</p>
                    <span className="IntroMessage__about" dangerouslySetInnerHTML={{__html: langSet.intro_about.main}} />
                    <a href="https://github.com/MiN1One/weather-experimental" className="IntroMessage__about">{langSet.intro_about.srcCode}</a>
                </div>
                <div className="IntroMessage__hint">
                    <svg dangerouslySetInnerHTML={{__html: useTag('basic_pin2')}}/>
                    <span>{langSet.intro_about.plsSearch}</span>
                </div>
                <ul className="IntroMessage__features">
                    {features}
                </ul>
                <p className="IntroMessage__notes">{langSet.intro_about.note}</p>
            </div>
        </div>
    )
};

export default IntroMessage;