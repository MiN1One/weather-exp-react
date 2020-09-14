import React from 'react';
import styled from 'styled-components';

import './Details.scss';
import '../../icons/arrows.css';
import '../../icons/weather.css';
import langSet from '../../main/main';

const StyledUl = styled.ul`
    list-style: none;
    display: grid;
    position: relative;
    justify-content: center;

    ${props => props.lang === 'de' || props.lang === 'es' 
        ? ` grid-template-columns: repeat(4, 1fr);
            grid-template-rows:repeat(2, max-content);
            grid-gap:1rem;
        
            @media only screen and (max-width: 53.75em) {
                grid-template-columns: repeat(4, 1fr);
                grid-template-rows: repeat(2, max-content);
            }

            @media only screen and (max-width: 39.375em) {
                grid-template-columns: repeat(2, 1fr);
                grid-template-rows: repeat(4, max-content);
            }

            @media only screen and (max-width: 22.5em) {
                grid-template-columns: 23rem;
                grid-template-rows: repeat(8, max-content);
            }
        `
        : ` grid-template-columns: repeat(8, max-content);
            justify-content:space-between;
        
            @media only screen and (max-width: 53.75em) {
                grid-template-columns: repeat(4, 1fr);
                grid-template-rows: repeat(2, max-content);
                grid-gap: 1rem
            }

            @media only screen and (max-width: 32.5em) {
                grid-template-columns: repeat(2, 1fr);
                grid-template-rows: repeat(4, max-content);
                justify-content: space-evenly;
            }

            @media only screen and (max-width: 17.1875em) {
                grid-template-columns: 19rem;
                grid-template-rows: repeat(8, max-content);
            }
        `}
    `;

const Details = (props) => {
    const formatWind = (string) => {
        if (string.includes('-')) {
            const all = string.split('-');
            const format = all.join(' to ');
            return format.charAt(0).toUpperCase() + format.slice(1);
        }
        return string.charAt(0).toUpperCase() + string.slice(1);
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

    let utcTimeZone;
    let utcTimeZoneRaw;

    const getTimeZone = () => {
        let t = new Date();
        utcTimeZoneRaw = t.getTimezoneOffset() / 60;
        utcTimeZone = utcTimeZoneRaw <= 0 ? Math.abs(utcTimeZoneRaw) : utcTimeZoneRaw;
        return {utcTimeZone, utcTimeZoneRaw};
    };

    // const timeZoneString = () => {
    //     getTimeZone();
    //     if (utcTimeZoneRaw > 0) return `-${utcTimeZone}`
    //     else return `+${utcTimeZone}`;
    // };

    const formatSunriseTime = (rise, format = 24) => {
        getTimeZone();
        let sunrise = rise.split(':');
    
        let sunriseHours = utcTimeZoneRaw > 0 ? parseInt(sunrise[0]) - utcTimeZone : parseInt(sunrise[0]) + utcTimeZone;
    
        if (sunriseHours > format) {
            const differenceRise = sunriseHours - format;

            if (differenceRise < 10) return `0${differenceRise}:${sunrise[1]}`
            else return `${differenceRise}:${sunrise[1]}`;

        } else return `${sunriseHours}:${sunrise[1]}`;
    };

    const formatSunsetTime = (set, format = 24) => {
        getTimeZone();
        let sunset = set.split(':');
        let sunsetHours = (utcTimeZoneRaw > 0) ? parseInt(sunset[0]) - utcTimeZone : parseInt(sunset[0]) + utcTimeZone;

        if (sunsetHours > format) {
            const differenceSet = sunsetHours - format;

            if (differenceSet < 10) return `0${differenceSet}:${sunset[1]}` 
            else return `${differenceSet}:${sunset[1]}`;

        } else return `${sunsetHours}:${sunset[1]}`;
    };

    const adjustUnit = () => {
        if (props.units === 'I') return 'mph'
        else return 'm/s';
    };

    return (
        <div className="Details">
            <StyledUl {...props}>
                <li className="Details__item a-0 a-0">
                    <span className="Details__icons w-weather-cloud-drop"></span>
                    <span className="Details__title">{langSet[props.lang].details.pop}</span>
                    <span className="Details__in Details__in--wdirection">~{props.forecast[0].pop}%</span>
                </li>
                <li className="Details__item a-0 a-1">
                    <span className="Details__icons arrows-move-bottom"></span>
                    <span className="Details__title">{langSet[props.lang].details.pres}</span>
                    <span className="Details__in Details__in--wdirection">{Math.round(props.data.pres)} Pa</span>
                </li>
                <li className="Details__item a-0 a-2">
                    <span className="Details__icons w-weather-cloud"></span>
                    <span className="Details__title">{langSet[props.lang].details.clouds}</span>
                    <span className="Details__in Details__in--wdirection">~{props.data.clouds}%</span>
                </li>
                <li className="Details__item a-0 a-3">
                    <span className="Details__icons w-weather-wind"></span>
                    <span className="Details__title">{langSet[props.lang].details.wind_spd}</span>
                    <span className="Details__in Details__in--wdirection">{Math.round(props.data.wind_spd)} {adjustUnit()}</span>
                </li>
                <li className="Details__item a-0 a-4">
                    <span className={`Details__icons ${formatWindDirIcon(formatWind(props.data.wind_cdir_full))} Details__compass`}></span>
                    <span className="Details__title">{langSet[props.lang].details.wind_cdir_full}</span>
                    <span className="Details__in Details__in--wdirection">{formatWind(props.data.wind_cdir_full)}</span>
                </li>
                <li className="Details__item a-0 a-5">
                    <span className="Details__icons w-weather-drop"></span>
                    <span className="Details__title">{langSet[props.lang].details.rh}</span>
                    <span className="Details__in Details__in--wdirection">{Math.round(props.data.rh)}%</span>
                </li>
                <li className="Details__item a-0 a-6">
                    <span className="Details__icons w-weather-sun"></span>
                    <span className="Details__title">{langSet[props.lang].details.uv}</span>
                    <span className="Details__in Details__in--wdirection">{props.data.uv.toFixed(2)} nm</span>
                </li>
                <li className="Details__item a-0 a-7">
                    <div className="Details__icon-box">
                        <span className="Details__icons w-weather-sunset"></span>
                        <span className="Details__icons w-weather-sundown"></span>
                    </div>
                    <span className="Details__title Details__title--time">{langSet[props.lang].details.sun_rise_set}</span>
                    <span className="Details__in Details__in--minmax">{`${formatSunriseTime(props.data.sunrise)}, ${formatSunsetTime(props.data.sunset)}`}</span>
                    {/* <div className="Details__sunriseset">
                        <span className="Details__text">Time is calculated in accordance with your local timezone</span>
                        <span className="Details__timeoffset">UTC timezone</span>
                    </div> */}
                </li>
            </StyledUl>
            <div className="Details__time a-0 a-8">{langSet[props.lang].details.obs_time}: {props.data.ob_time}</div>
        </div>
    )
};

export default Details;