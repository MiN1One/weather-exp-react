import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import $ from 'jquery';

import sprite from '../../../icons/sprite.svg';
import '../Dropdown.scss';
import * as actions from '../../../store/actions';
import en from '../../../main/main_en';
import de from '../../../main/main_de';

class LanguageDropdown extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sliderDownShown: false
        };
    }

    componentDidMount() {
        this.setState({isChecked: this.props.lang})
    }

    useTag = (svg) => {
        return `<use xlink:href=${sprite}#${svg}></use>`
    }
    
    slideDown = () => {
        if ($(this.langList).is(':hidden')) $(this.langList).slideDown({ duration: 250 });
        else $(this.langList).slideUp({ duration: 250 });
    }

    selectLangHandler = (lang, state) => {
        if (state !== 'disabled') {
            if (this.props.lang !== lang && !this.props.loading) {
                this.props.onLangChange(lang);
            }
            if (this.props.lang !== lang && this.props.search && !this.props.loading) this.props.onLangRefresh(lang, this.props.units, this.props.search);
            localStorage.setItem('weatherAppLang', lang);
        } 
    }

    render() {
        const langSet = this.props.lang === 'de' ? de : en;

        let classesIco = ['Dropdown__ico'];
        if (this.state.sliderDownShown) {
            classesIco.push('animated')
        };

        const langs = langSet.lang.list.map(el => {
            return <li 
                className={`${el.value === this.props.lang ? 'isChecked' : ''} Dropdown__item`} 
                key={el.value} 
                onClick={this.selectLangHandler.bind(this, el.value, el.state)} 
                tabIndex={0} 
                data-state={el.state}>{el.title}</li>
        });
        
        return (
            <div className="Dropdown" onClick={this.slideDown} tabIndex={0}>
                <div className="Dropdown__toggler">
                    <span>{this.props.lang.toUpperCase()}</span>
                    <svg className={classesIco.join(' ')} dangerouslySetInnerHTML={{__html: this.useTag('arrows_down')}} />
                </div>
                <ul className="Dropdown__list" ref={el => this.langList = el}>
                    <li className="Dropdown__title">{langSet.lang.title}</li>
                    {langs} 
                </ul>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        lang: state.data.lang,
        units: state.data.units,
        search: state.data.search
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLangChange: (lang) => dispatch(actions.changeLang(lang)),
        onLangRefresh: (lang, units, search) => dispatch(actions.performSearch(lang, units, search))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LanguageDropdown));
