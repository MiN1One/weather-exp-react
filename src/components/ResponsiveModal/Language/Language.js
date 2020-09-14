import React from 'react';
import { connect } from 'react-redux';

import langSet from '../../../main/main';
import langList from '../../../main/langs';
import * as actions from '../../../store/actions';
import '../ResponsiveModal.scss';
import Backdrop from '../../../UI/Backdrop/Backdrop';

const LanguageMobile = (props) => {

    const selectLangHandler = (lang, state) => {
        if (state !== 'disabled') {
            if (props.lang !== lang && !props.loading) {
                props.onLangChange(lang);
            }
            if (props.lang !== lang && props.search && !props.loading) props.onLangRefresh(lang, props.units, props.search);
            localStorage.setItem('weatherAppLang', lang);
            props.close();
        }
    }

    const langItem = langList.map(el => {
        return (
            <li className={`ResponsiveModal__item ${el.value === props.lang ? 'isChecked' : ''}`} 
                onClick={selectLangHandler.bind(this, el.value, el.state)}
                key={el.value}
                data-state={el.state}>{el.title}</li>
        )
    });

    return (
        <React.Fragment>
            {props.inBack ? <Backdrop click={props.close} /> : null}
            <div className="ResponsiveModal">
                <p className="ResponsiveModal__title">{langSet[props.lang].lang.title}</p>
                <ul className="ResponsiveModal__list">
                    {langItem}
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
        onLangChange: (lang) => dispatch(actions.changeLang(lang)),
        onLangRefresh: (lang, units, search) => dispatch(actions.performSearch(lang, units, search))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LanguageMobile);