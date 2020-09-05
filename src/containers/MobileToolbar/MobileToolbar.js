import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import en from '../../main/main_en';
import de from '../../main/main_de';
import './MobileToolbar.scss';
import '../../icons/basic.css';
import '../../icons/arrows.css';
import LanguageMobile from '../../components/ResponsiveModal/Language/Language';
import UnintsMobile from '../../components/ResponsiveModal/UnitsChanger/UnitsChanger';
import Backdrop from '../../UI/Backdrop/Backdrop';
import * as actions from '../../store/actions';
import Logo from '../../components/Logo/Logo';

const MobileToolbar = (props) => {

    const langSet = props.lang === 'de' ? de : en;

    const [dLangs, setDLangs] = useState(false);
    const [dUnits, setDUnits] = useState(false);
    const [dBar, setDBar] = useState(false);

    const langToggler = () => {
        setDLangs(true);
        setDUnits(false);
        setDBar(false);
    };
    
    const unitToggler = () => {
        setDUnits(true);
        setDLangs(false);
        setDBar(false);
    };

    const classes = ['MobileToolbar__bar'];
    if (dBar) {
        classes.push('open');
    };

    const showFullLang = () => {
        if (props.lang === 'de') return 'Deutsch';
        if (props.lang === 'ru') return 'Russian';
        else return 'English'
    };

    const showFullUnit = () => {
        if (props.units === 'S') return 'Scientific';
        if (props.units === 'I') return 'Imperial';
        else return 'Metric'
    };

    const clearDataHandler = () => {
        if (window.location.pathname !== '/') props.onClear();
        props.history.replace('/');
    };

    const updateHandler = () => {
        if (props.search) props.onRefresh(props.lang, props.units, props.search)
    };

    return (
        <div className="MobileToolbar">
            <button className="MobileToolbar__toggler" onClick={() => setDBar(true)}>
                <span className="MobileToolbar__toggler-icon arrows-hamburger-2"></span>
            </button>
            {dBar ? <Backdrop click={() => setDBar(false)} /> : null}
            <div className={classes.join(' ')}>
                <Logo />
                <div className="MobileToolbar__box">
                    <p className="MobileToolbar__title mt-small">{langSet.lang.title}</p>
                    <button className="MobileToolbar__btns" onClick={langToggler}>{showFullLang()}</button>
                </div>
                <div className="MobileToolbar__box">
                    <p className="MobileToolbar__title">{langSet.units.title}</p>
                    <button className="MobileToolbar__btns" onClick={unitToggler}>{showFullUnit()}</button>
                </div>
                <div className="MobileToolbar__box">
                    <p className="MobileToolbar__title mb-small">{langSet.toolbar.title}</p>
                    <button className="MobileToolbar__tools MobileToolbar__btns">
                        <span className="icon-basic-laptop MobileToolbar__icon"></span>
                        <p className="MobileToolbar__tools-title">{langSet.toolbar.print}</p>
                    </button>
                    <button className="MobileToolbar__tools MobileToolbar__btns" onClick={clearDataHandler}>
                        <span className="arrows-circle-remove MobileToolbar__icon"></span>
                        <p className="MobileToolbar__tools-title">{langSet.toolbar.clear}</p>
                    </button>
                    <button className="MobileToolbar__tools MobileToolbar__btns" onClick={updateHandler}>
                        <span className="arrows-rotate MobileToolbar__icon"></span>
                        <p className="MobileToolbar__tools-title ">{langSet.toolbar.update}</p>
                    </button>
                </div>
            </div>
            {dLangs && !dUnits ? <LanguageMobile close={() => setDLangs(false)} inBack={dLangs} /> : null}
            {dUnits && !dLangs ? <UnintsMobile close={() => setDUnits(false)} inBack={dUnits} /> : null}
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        lang: state.data.lang,
        units: state.data.units,
        search: state.data.search,
        data: state.data.data
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onClear: () => dispatch(actions.clearData()),
        onRefresh: (lang, units, search) => dispatch(actions.performSearch(lang, units, search))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MobileToolbar));