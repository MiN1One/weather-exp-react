import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';

import sprite from '../../icons/sprite.svg';
import Details from '../../components/Details/Details';
import Forecast from '../../components/Forecast/Forecast';
import './Data.scss';
import Spinner from '../../UI/Spinner/Spinner';
import IntroMessage from '../../components/IntroMessage/IntroMessage';
import countries from '../../main/parsedCountries';
import ErrorReporter from '../../components/ErrorReporter/ErrorReporter';
import langSet from '../../main/main';

const Data = (props) => {

    const useTag = (svg) => {
        return `<use xlink:href=${sprite}#${svg}></use>`
    };

    const formatDate = (lang) => {
        let t = new Date();
        let month = t.getMonth();
        let date = t.getDate();
        let ending;
        if (lang === 'en') {
            if (String(date).endsWith('1')) ending = 'st';
            else if (String(date).endsWith('2')) ending = 'nd'; 
            else if (String(date).endsWith('3')) ending = 'rd';
            else if (date === 11 || date === 12 || date === 13) ending = 'th';
            else ending = 'th'
            return `${langSet[props.lang].months[month]} ${date}${ending}`;
        } else if (lang === 'ru') return `${date} ${langSet[props.lang].months[month]}`
        else return `${langSet[props.lang].months[month]} ${date}`;
    };
    
    const showUnit = () => {
        if (props.units === 'M') return '°C';
        else if (props.units === 'I') return '°F';
        else return ' K'
    };
    
    const formatLocation = location => {
        if (location.endsWith('.')) return location.replace(/\./g, '');
        return location;
    };
    
    const formatTime = () => {
        let t = new Date();
        let mins = t.getMinutes();
        let hours = t.getHours();
        if (mins < 10) {
            mins = `0${mins}`;
        }
        if (hours < 10) {
            hours = `0${hours}`
        }
        return `${hours} : ${mins}`
    };

    let data = null;
    if (props.loading) data = <Spinner data={props.data} lang={props.lang} />;

    else if (props.data && props.forecast) {
        data = (
            <div className="Data" id="Data">
                <div className="Data__location a-0">
                    <span>
                    <svg className="Data__pin" dangerouslySetInnerHTML={{__html: useTag.call(this, 'basic_pin2')}} />
                    <span className="Data__search-for">{langSet[props.lang].main_top.searchFor}</span>
                    </span>
                    <span className="Data__l-main">
                        <svg className="Data__i-location" dangerouslySetInnerHTML={{__html: useTag.call(this, 'basic_geolocalize-05')}} />
                        {`${formatLocation(props.data.city_name)}, ${countries(props.data.country_code, props.lang)}`}
                    </span>
                </div>
                <div className="Data__conditions a-0 a-4">
                    <span className="Data__state">{props.data.weather.description}</span>
                    <span className="Data__substate">{formatDate(props.lang)}</span>
                    <span className="Data__sep">|</span>
                    <span className="Data__substate Data__substate--time">{formatTime()}</span>
                </div>
                <div className="Data__main a-0 a-4">
                    <svg className="Data__icon" dangerouslySetInnerHTML={{__html: useTag.call(this, props.data.weather.icon)}} />
                    <span className="Data__temp">{Math.round(props.data.temp)}{showUnit()}</span>
                    <span className="Data__real">&sim;<span className="Data__real--text">{langSet[props.lang].main_top.realFeel}</span> {props.data.app_temp}{showUnit()}</span>
                </div>
                <Details 
                    data={props.data} 
                    units={props.units} 
                    forecast={props.forecast} 
                    lang={props.lang} />
                <Forecast
                    forecast={props.forecast}
                    units={props.units} 
                    lang={props.lang} />
            </div>
        )
    } else if (props.error) {
        data = <ErrorReporter someError={true} lang={props.lang} />;
    } else {
        data = <ErrorReporter invalidInput={true} lang={props.lang} />;
    }

    return (
        <Switch>
            <Route path="/performsearch" render={() => data} />
            <Route path="/" exact render={() => <IntroMessage lang={props.lang} />} />
            <Route path="*" render={() => <ErrorReporter notFound={true} lang={props.lang} />} />
            {/* <Redirect to="/" /> */}
        </Switch>
    )
};

const mapStateToProps = (state) =>  {
    return {
        units: state.data.units,
        data: state.data.data,
        lang: state.data.lang,
        search: state.data.search,
        forecast: state.data.forecast,
        loading: state.data.loading,
        error: state.data.error,
        intro: state.data.intro
    }
};

export default connect(mapStateToProps)(withRouter(React.memo(Data)));

/******** CURRENT CONDITIONS ********
 * Normal temp
 * Real temp
 * City name
 * Description
 * Country code - name
 * Date
 * Cloud cover
 * Observation time
 * Pressure
 * Pecipitation
 * Time zone
 * UV index
 * Wind direction
 * Wind speed m/s
 * Sunset time 
 * Sunrise time
 */

/********** FORECAST ***********
 * Date
 * Max temp
 * Min temp
 * Cloud cover max
 * Cloud cover min
 * Normal temp
 * Description
 * Wether Icon
 * Description
 * Wind direction
 * Wind direction lang
 * Wind speed
 * Cloud cover
 * Pressure
 * Precipitation
 */