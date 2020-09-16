import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './NavRight.scss';
import '../../../icons/arrows.css';
import '../../../icons/basic.css';
import * as actions from '../../../store/actions';
import langSet from '../../../main/main';
// import ReactToPrint from 'react-to-print';


const NavRight = (props) => {
    
    const clearDataHandler = () => {
        if (window.location.pathname !== '/') props.onClear();
        props.history.replace('/');
    };

    const updateHandler = () => {
        if (props.search) props.onRefresh(props.lang, props.units, props.search)
    };

    return (
        <div className="Tools">
            {/* <ReactToPrint
                trigger={() => <button 
                    className="Tools__print Tools__btns"  
                    >
                    <span className="icon-basic-laptop Tools__ico-fonts"></span>
                    <div className="Tools__tooltips Tools__tooltips--hint">
                        <span className="Tools__title">Print</span>
                        <p className="Tools__hint">Choose landscape<br/>layout.</p>
                    </div>
                </button>}
                content={() => <Data />} /> */}
            <button className="Tools__print Tools__btns Tools__btns--disabled">
                <span className="icon-basic-laptop Tools__ico-fonts"></span>
                <div className="Tools__tooltips Tools__tooltips--hint">
                <span className="Tools__title">{langSet[props.lang].toolbar.print}</span>
                <p className="Tools__hint" dangerouslySetInnerHTML={{__html: langSet[props.lang].toolbar.printP}}></p>
                </div>
            </button>
            <button className="Tools__clear Tools__btns" onClick={clearDataHandler}>
                <span className="arrows-circle-remove Tools__ico-fonts"></span>
                <div className="Tools__tooltips">
                    <span className="Tools__title">{langSet[props.lang].toolbar.clear}</span>
                </div>
            </button>
            <button className="Tools__update Tools__btns" onClick={updateHandler}>
                <span className="arrows-rotate Tools__ico-fonts"></span>
                <div className="Tools__tooltips Tools__tooltips--right Tools__tooltips--hint">
                    <span className="Tools__title">{langSet[props.lang].toolbar.update}</span>
                    <p className="Tools__hint Tools__hint--update" dangerouslySetInnerHTML={{__html: langSet[props.lang].toolbar.updateP}}></p>
                </div>
            </button>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        search: state.data.search,
        units: state.data.units,
        lang: state.data.lang,
        data: state.data.data
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onClear: () => dispatch(actions.clearData()),
        onRefresh: (lang, units, search) => dispatch(actions.performSearch(lang, units, search))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NavRight));