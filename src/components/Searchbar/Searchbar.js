import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import $ from 'jquery';

import './Searchbar.scss';
import * as actions from '../../store/actions';
import '../../icons/basic.css';
import en from '../../main/main_en';
import de from '../../main/main_de';

const Searchbar = (props) => {

    useEffect(() => {
        props.readStorage();
    });

    const langSet = props.lang === 'de' ? de : en;

    let searchInput = useRef();
    let recentList = useRef();
    
    const performSearch = (event) => {
        event.preventDefault();
        if (props.search) {
            props.onSubmitSearch(props.lang, props.units, props.search);
            props.history.replace(`/performsearch`);
        };
        searchInput.current.value = '';
        searchInput.current.blur();
    };

    const fixString = country => { 
        if (!country) return '...';
        else return country;
    };
    
    const transformUppercase = string => {
        if (string.includes(' ')) {
            const arr = string.split(' ');
    
            if (arr.length === 2) {
                const arr1 = arr[0].charAt(0).toUpperCase() + arr[0].slice(1);
                const arr2 = arr[1].charAt(0).toUpperCase() + arr[1].slice(1);
                return arr1 + ' ' + arr2;
            } else if (arr.length === 3) {
                const arr1 = arr[0].charAt(0).toUpperCase() + arr[0].slice(1);
                const arr2 = arr[1].charAt(0).toUpperCase() + arr[1].slice(1);
                const arr3 = arr[2].charAt(0).toUpperCase() + arr[2].slice(1);
                return arr1 + ' ' + arr2 + ' ' + arr3;
            } else {
                const arr1 = arr[0].charAt(0).toUpperCase() + arr[0].slice(1);
                const arr2 = arr[1].charAt(0).toUpperCase() + arr[1].slice(1);
                const arr3 = arr[2].charAt(0).toUpperCase() + arr[2].slice(1);
                const arr4 = arr[3].charAt(0).toUpperCase() + arr[3].slice(1);
                return arr1 + ' ' + arr2 + ' ' + arr3 + ' ' + arr4;
            };
    
        } else return string.charAt(0).toUpperCase() + string.slice(1);
    };

    const pickFromRecent = (el) => {
        if (props.data) {
            if (props.data.city_name !== el.search) {
                props.onSubmitSearch(props.lang, props.units, el.search);
                props.history.push('/performsearch');
            } else props.history.push('/performsearch');
        } else {
            props.onSubmitSearch(props.lang, props.units, el.search);
            props.history.push('/performsearch');
            props.onInputChange(el.search);
        }

    };

    const onBlur = () => {
        setTimeout(() => {
            $(recentList.current).slideUp({ duration: 250 })
        }, 55)
    };

    let historyItems = null;
    if (props.searchHistory) {
        historyItems = props.searchHistory.map(el => {
            return (
                <li className="Searchbar__recent-item" 
                    onClick={pickFromRecent.bind(this, el)}
                    key={el.search}>
                        {transformUppercase(el.search)}, {fixString(el.country)}
                </li>
            )
        });
    };

    return (
        <form className="Searchbar" onSubmit={event => performSearch(event)}>
            <input 
                ref={searchInput} 
                type="text" 
                className="Searchbar__field" 
                placeholder={langSet.toolbar.searchField} 
                onFocus={() => $(recentList.current).slideDown({ duration: 250 })}
                onBlur={onBlur} 
                onChange={(event) => props.onInputChange(event.target.value)} />
            <button className="Searchbar__btn" title={langSet.toolbar.searchBtn}>
                <span className="icon-basic-magnifier Searchbar__ico-fonts"></span>
            </button>
            <ul className="Searchbar__recent-list" ref={recentList}>
                {historyItems}
                <li className="Searchbar__recent-items">{langSet.toolbar.recentSearches}</li>
            </ul>
        </form>
    )
};

const mapStateToProps = state => {
    return {
        search: state.data.search,
        lang: state.data.lang,
        units: state.data.units,
        data: state.data.data,
        searchHistory: state.data.history
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onInputChange: (input) => dispatch(actions.inputRecieved(input)),
        onSubmitSearch: (lang, units, search) => dispatch(actions.performSearch(lang, units, search)),
        readStorage: () => dispatch(actions.readStore())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(React.memo(Searchbar)));