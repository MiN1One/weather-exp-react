import React, { useEffect } from 'react';

import './ForecastPopup.scss';
import sprite from '../../icons/sprite.svg';
import '../../icons/arrows.css';
import '../../icons/basic.css';
import '../../icons/weather.css';
import en from '../../main/main_en';
import de from '../../main/main_de';

const ForecastPopup = (props) => {

    const langSet = props.lang === 'de' ? de : en;

    const useTag = (svg) => {
        return `<use xlink:href=${sprite}#${svg}></use>`
    };

    const convertToWeekday = (date, lang = 'en') => {
        const dateObj = new Date(date);
        const dayOfWeek = dateObj.getDay();
        const month = dateObj.getMonth();
        const date1 = dateObj.getDate();
        if (lang === 'en') {
            return isNaN(dayOfWeek) ? null : 
            `${['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek]}, ${['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][month]} ${date1}`;
        } else if (lang === 'de') {
            return isNaN(dayOfWeek) ? null : 
            `${['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'][dayOfWeek]}, ${['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'][month]} ${date1}`;
        }
    };

    const formatWindDirIcon = (windDir) => {
        if (windDir.includes(' to northwest')) return 'w-weather-wind-nw';
        if (windDir.includes(' to nordwestlich')) return 'w-weather-wind-nw';
        if (windDir.includes(' to northeast')) return 'w-weather-wind-ne';
        if (windDir.includes(' to nordost')) return 'w-weather-wind-ne';
        if (windDir.includes(' to southeast')) return 'w-weather-wind-se';
        if (windDir.includes(' to südöstlich')) return 'w-weather-wind-se';
        if (windDir.includes(' to southwest')) return 'w-weather-wind-sw';
        if (windDir.includes(' to südwesten')) return 'w-weather-wind-sw';
        if (windDir === 'West') return 'w-weather-wind-w';
        if (windDir === 'Westen') return 'w-weather-wind-w';
        if (windDir === 'East') return 'w-weather-wind-e';
        if (windDir === 'Osten') return 'w-weather-wind-e';
        if (windDir === 'North') return 'w-weather-wind-n';
        if (windDir === 'Norden') return 'w-weather-wind-n';
        if (windDir === 'South') return 'w-weather-wind-s';
        if (windDir === 'Süd') return 'w-weather-wind-s';
        if (windDir === 'Northeast') return 'w-weather-wind-ne';
        if (windDir === 'Nordost') return 'w-weather-wind-ne';
        if (windDir === 'Northwest') return 'w-weather-wind-nw';
        if (windDir === 'Nordwestlich') return 'w-weather-wind-nw';
        if (windDir === 'Southeast') return 'w-weather-wind-se';
        if (windDir === 'Südöstlich') return 'w-weather-wind-se';
        if (windDir === 'Southwest') return 'w-weather-wind-sw';
        if (windDir === 'Südwestlich') return 'w-weather-wind-sw';
        return 'w-weather-wind-n';
    };

    const formatWind = string => {
        if (string.includes('-')) {
            const all = string.split('-');
            const format = all.join(' to ');
            return format.charAt(0).toUpperCase() + format.slice(1);
        }
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    const adjustUnit = () => {
        if (props.units === 'I') return 'mph'
        else return 'm/s';
    };

    const showUnit = () => {
        if (props.units === 'M') return '°C';
        else if (props.units === 'I') return '°F';
        else return ' K'
    };

    return (
        <React.Fragment>
            <div className="ForecastPopup">
                <div className="ForecastPopup__container">
                    <div className="ForecastPopup__date">
                        <span>{convertToWeekday(props.forecast.valid_date, props.lang)}</span>
                        <button className="ForecastPopup__close" onClick={props.onClose}>
                            <span className="ForecastPopup__close-ico arrows-remove"></span>
                        </button>
                    </div>
                    <div className="ForecastPopup__main">
                        <div className="ForecastPopup__temps">
                            <svg className="ForecastPopup__ico" dangerouslySetInnerHTML={{__html: useTag(props.forecast.weather.icon)}} />
                            <div className="ForecastPopup__minmax">
                                <span className="ForecastPopup__max">{props.forecast.high_temp}{showUnit()}</span>
                                <span className="ForecastPopup__min">{langSet.details.low_temp}: {props.forecast.low_temp}{showUnit()}</span>
                            </div>
                        </div>
                        <div className="ForecastPopup__des">{props.forecast.weather.description}</div>
                    </div>
                    <ul className="ForecastPopup__dets">
                        <li className="ForecastPopup__item">
                            <span className="ForecastPopup__item-icons w-weather-cloud-drop"></span>
                            <span className="ForecastPopup__title">{langSet.details.pop}</span>
                            <span className="ForecastPopup__title">{props.forecast.pop}%</span>
                        </li>
                        <li className="ForecastPopup__item">
                            <span className="ForecastPopup__item-icons w-weather-cloud"></span>
                            <span className="ForecastPopup__title">{langSet.details.clouds}</span>
                            <span className="ForecastPopup__title">{props.forecast.clouds}%</span>
                        </li>
                        <li className="ForecastPopup__item">
                            <span className={`ForecastPopup__item-icons ${formatWindDirIcon(formatWind(props.forecast.wind_cdir_full))}`}></span>
                            {/* <span className={`ForecastPopup__item-icons ${formatWindDirIcon(formatWind(props.wData.wind_cdir_full))}`}></span> */}
                            <span className="ForecastPopup__title">{langSet.details.wind_cdir_full}</span>
                            <span className="ForecastPopup__title">{formatWind(props.forecast.wind_cdir_full)}</span>
                        </li>
                        <li className="ForecastPopup__item">
                            <span className="ForecastPopup__item-icons w-weather-wind"></span>
                            <span className="ForecastPopup__title">{langSet.details.wind_spd}</span>
                            <span className="ForecastPopup__title">{props.forecast.wind_spd.toFixed(2)}&nbsp;{adjustUnit()}</span>
                        </li>
                        <li className="ForecastPopup__item">
                            <span className="ForecastPopup__item-icons arrows-move-bottom"></span>
                            <span className="ForecastPopup__title">{langSet.details.pres}</span>
                            <span className="ForecastPopup__title">{props.forecast.pres.toFixed(2)} Pa</span>
                        </li>
                        <li className="ForecastPopup__item">
                            <span className="ForecastPopup__item-icons w-weather-sun"></span>
                            <span className="ForecastPopup__title">{langSet.details.uv}</span>
                            <span className="ForecastPopup__title">{props.forecast.uv.toFixed(2)} nm</span>
                        </li>
                    </ul>
                </div>
                <div className="ForecastPopup__btns">
                    <button className="ForecastPopup__btn" onClick={props.goToPrevious}>{langSet.prev}</button>
                    <button className="ForecastPopup__btn" onClick={props.goToNext}>{langSet.next}</button>
                </div>
            </div>
        </React.Fragment>
    );
};

export default ForecastPopup;

/********** FORECAST ***********
 * Date
 * Max temp
 * Min temp
 * Wether Icon
 * Description
 * 
 * Cloud cover
 * Wind direction
 * Wind speed
 * Pressure
 * Precipitation
 */