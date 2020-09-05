import React, { Component } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';

import sprite from '../../../icons/sprite.svg';
import * as actions from '../../../store/actions';
import en from '../../../main/main_en';
import de from '../../../main/main_de';

class UnitChanger extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            showDrop: false,
        }
    }

    componentDidMount() {
        this.setState({isChecked: this.props.units});
    }

    useTag = (svg) => {
        return `<use xlink:href=${sprite}#${svg}></use>`
    }

    changeUnitHandler = (unit) => {
        localStorage.setItem('weatherAppUnit', unit);
        if (unit !== this.props.units && !this.props.loading) this.props.changeUnits(unit);
        if (this.props.search && !this.props.loading) this.props.onChangeUnit(this.props.lang, unit, this.props.search)
    }

    slideDown = () => {
        if ($(this.unitList).is(':hidden')) $(this.unitList).slideDown({ duration: 250 });
        else $(this.unitList).slideUp({ duration: 250 });
    }

    render() {
        const langSet = this.props.lang === 'de' ? de : en;

        const unitItems = langSet.units.list.map(el => {
            return (
                <li className={`Dropdown__item ${this.props.units === el.value ? 'isChecked' : ''}`} 
                    onClick={this.changeUnitHandler.bind(this, el.value)} 
                    key={el.value}
                    tabIndex={0}>{el.title}</li>
            );
        });

        let classesIco = ['Dropdown__ico'];
        if (this.state.showDrop) {
            classesIco.push('animated');
        };

        return (
            <div className="Dropdown" onClick={this.slideDown} tabIndex={0}>
                <div className="Dropdown__toggler">
                    <span>{this.props.units}</span>
                    <svg className={classesIco.join(' ')} dangerouslySetInnerHTML={{__html: this.useTag('arrows_down')}} />
                </div>
                <ul className="Dropdown__list" ref={el => this.unitList = el}>
                    <p className="Dropdown__title">{langSet.units.title}</p>
                    {unitItems}
                </ul>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        units: state.data.units,
        lang: state.data.lang,
        search: state.data.search,
        loading: state.data.loading
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeUnits: (unit) => dispatch(actions.changeUnits(unit)),
        onChangeUnit: (lang, units, search) => dispatch(actions.performSearch(lang, units, search))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UnitChanger);