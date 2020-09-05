import React from 'react';
import { connect } from 'react-redux';

import en from '../../../main/main_en';
import de from '../../../main/main_de';
import * as actions from '../../../store/actions';
import Backdrop from '../../../UI/Backdrop/Backdrop';
import '../ResponsiveModal.scss';

const LanguageMobile = (props) => {

    const langSet = props.lang === 'de' ? de : en;

    const selectLangHandler = unit => {
        if (props.units !== unit && !props.loading) {
            props.changeUnits(unit);
        }
        if (props.units !== unit && props.search && !props.loading) props.onChangeUnit(props.lang, unit, props.search);
        localStorage.setItem('weatherAppUnit', unit);
        props.close();
    }

    const unitItem = langSet.units.list.map(el => {
        return (
            <li className={`ResponsiveModal__item ${el.value === props.units ? 'isChecked' : ''}`} 
                onClick={selectLangHandler.bind(this, el.value)} 
                key={el.value}>{el.title}</li>
        )
    });

    return (
        <React.Fragment>
            {props.inBack ? <Backdrop click={props.close} /> : null}
            <div className="ResponsiveModal">
                <p className="ResponsiveModal__title">{langSet.units.title}</p>
                <ul className="ResponsiveModal__list">
                    {unitItem}
                </ul>
            </div>
        </React.Fragment>
    )
};

const mapStateToProps = (state) => {
    return {
        lang: state.data.lang,
        units: state.data.units,
        search: state.data.search,
        loading: state.data.loading
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeUnits: (unit) => dispatch(actions.changeUnits(unit)),
        onChangeUnit: (lang, units, search) => dispatch(actions.performSearch(lang, units, search))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LanguageMobile);