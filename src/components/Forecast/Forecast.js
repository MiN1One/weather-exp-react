import React, { Component } from 'react';
import SwiperCore, { Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/components/navigation/navigation.scss';

import './Forecast.scss';
import sprite from '../../icons/sprite.svg';
import '../../vendors/swiper.min.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import ForecastPopup from '../ForecastPopup/ForecastPopup';
import langSet from '../../main/main';

// install Swiper components
SwiperCore.use([Navigation]);


class Forecast extends Component {

    state = {
        selectedForecast: null,
        showBackdrop: false
    }

    limitDes = (description) => {
        const newDes = [];
        if (description.length > 17) {
            description.split(' ').reduce((a, cur) => {
                if (a + cur.length <= 17) {
                    newDes.push(cur);
                }
                else return a + cur.length;
            }, 0);
            return `${newDes.join(' ')} ..`;
        }
        else return description;
    }

    convertToWeekday = (date) => {
        const dayOfWeek = new Date(date).getDay();
        const month = new Date(date).getMonth();
        const date1 = new Date(date).getDate();
        return isNaN(dayOfWeek) ? null : 
        `${langSet[this.props.lang].weekdays[dayOfWeek]} ${month + 1}/${date1}`;
    }

    showUnit = () => {
        if (this.props.units === 'M') return '°C';
        else if (this.props.units === 'I') return '°F';
        else return ' K'
    }

    onViewForecast = (index) => {
        this.setState({selectedForecast: index});
        this.setState({showBackdrop: false})
    }

    useTag = (svg) => {
        return `<use xlink:href=${sprite}#${svg}></use>`
    }

    onClickPrevious = () => {
        if (this.state.selectedForecast) {
            this.setState((prevState) => {
                return { selectedForecast: prevState.selectedForecast - 1 }
            })
        }
    }
    
    onClickNext = () => {
        if (this.state.selectedForecast !== 15) {
            this.setState((prevState) => {
                return { selectedForecast: prevState.selectedForecast + 1 }
            })
        } else if (this.state.selectedForecast === 15) {
            this.setState({selectedForecast: 1})
        }
    }
    onCloseModal = () => {
        this.setState({selectedForecast: null})
    }

    render() {
        let forecast = null;
        if (this.props.forecast) {
            forecast = this.props.forecast.map((el, i) => {
                return (
                    <SwiperSlide className="Forecast__item swiper-slide fade" key={i} onClick={this.onViewForecast.bind(this, i)} tabIndex={0}>
                        <span className="Forecast__title-f"><span className="Forecast__title-f Forecast__title--day">{this.convertToWeekday(el.valid_date)}</span></span>
                        <svg className="Forecast__icons-f" dangerouslySetInnerHTML={{__html: this.useTag(el.weather.icon)}} />
                        <span className="Forecast__title-f Forecast__condition-f">{this.limitDes(el.weather.description)}</span>
                        <span className="Forecast__in-f">{Math.round(el.high_temp)}{this.showUnit()} / {Math.round(el.low_temp)}{this.showUnit()}</span>
                    </SwiperSlide>
                )
            });
        }

        return (
            <React.Fragment>
                <Swiper 
                    className="Forecast"
                    navigation={{nextEl:'.swiper-button-next',prevEl:'.swiper-button-prev'}}
                    breakpoints={{
                        200: {
                            slidesPerView: 1,
                        },
                        300: {
                            slidesPerView: 2,
                        },
                        400: {
                            slidesPerView: 3,
                        },
                        631: {
                            slidesPerView: 4,
                        },
                        855: {
                            slidesPerView: 5,
                        },
                        950: {
                            slidesPerView: 6,
                        }
                    }}
                    draggable={false}
                    slidesPerView={7}>
                        {forecast}
                        <div className="swiper-button-next"></div>
                        <div className="swiper-button-prev"></div>
                </Swiper>
                {this.state.selectedForecast ? <Backdrop click={() => this.setState({selectedForecast: null})}/> : null}
                {this.state.selectedForecast ? 
                <ForecastPopup 
                    forecast={this.props.forecast[this.state.selectedForecast]} 
                    lang={this.props.lang} 
                    units={this.props.units} 
                    goToPrevious={this.onClickPrevious}
                    goToNext={this.onClickNext} 
                    onClose={this.onCloseModal} /> : null}
            </React.Fragment>
        )
    }
};

export default Forecast;