import actionTypes from './actionTypes';
import axios from 'axios';
import store from '../store';
import countries from '../../main/parsedCountries';

const state = store.getState();

axios.defaults.baseURL = 'https://api.weatherbit.io/v2.0';

const apiKey = '35cf6338ede440b58d3aef92030e35e6';

export const changeUnits = (unit) => {
    return {
        type: actionTypes.CHANGE_UNITS,
        units: unit
    }
};

export const changeLang = (lang) => {
    return {
        type: actionTypes.CHANGE_LANG,
        lang: lang
    }
};

export const clearData = () => {
    return {
        type: actionTypes.CLEAR_DATA
    }
};

export const onLangRefresh = (lang, units, search) => {
    performSearch(lang, units, search);
    return {
        type: actionTypes.LANG_REFRESH
    };
};

export const inputRecieved = (input) => {
    return {
        type: actionTypes.INPUT_RECIEVED,
        input: input
    }
};

const searchSuccessful = (res) => {
    return {
        type: actionTypes.SEARCH_SUCCESSFUL,
        data: res
    }
};

const searchFailed = (er) => {
    return {
        type: actionTypes.SEARCH_FAILED,
        error: er
    }
};

const forecastSuccessful = (data) => {
    return {
        type: actionTypes.FORECAST_SUCCESSFUL,
        data: data
    }
};

export const readQuery = (query) => {
    return {
        type: actionTypes.READ_QUERY,
        query: query
    }
};

const forecastFailed = (error) => {
    return {
        type: actionTypes.FORECAST_FAILED,
        error: error
    }
};

const searchStart = () => {
    return {
        type: actionTypes.SEARCH_START
    }
};

let history = localStorage.getItem('recentSearches') !== null ? JSON.parse(localStorage.getItem('recentSearches')) : [];

const checkForExistence = (search) => {
    const exists = history.findIndex(el => el.search === search) === -1;
    return exists;
};

const storeRecentSearch = (search, data) => {
    const itemToAdd = {
        search: search,
        country: countries(data.country_code, state.lang)
    };
    if (history.length < 6) {
        if (history.length === 5) {
            history.splice(0, 1); // index to start, count to remove
            history.push(itemToAdd);
        } else history.push(itemToAdd);
    }
    localStorage.setItem('recentSearches', JSON.stringify(history));
    return {
        type: actionTypes.STORE_RECENT_SEARCH,
        history: history.reverse()
    }
};

export const readStore = () => {
    return {
        type: actionTypes.READ_STORE,
        historyList: history.reverse(),
    }
};

export const performSearch = (lang, units, search) => {
    if (search) {
        return dispatch => {
            dispatch(searchStart());
            axios.get(`/current?key=${apiKey}&lang=${lang}&units=${units}&city=${search}`)
                .then(res => {
                    const mainData = res.data.data[0];
                    dispatch(searchSuccessful(mainData));
                    dispatch(getForecast(lang, units, search));
                    if (checkForExistence(search)) dispatch(storeRecentSearch(search, mainData))
                    console.log(res);
                })
                .catch(er => {
                    dispatch(searchFailed(er));
                    dispatch(forecastFailed(er));
                });
        }
    }
};

export const getForecast = (lang, units, search) => {
    return dispatch => {
        axios.get(`/forecast/daily?key=${apiKey}&lang=${lang}&units=${units}&city=${search}`)
            .then(res => {
                console.log(res);
                dispatch(forecastSuccessful(res.data.data));
            })
            .catch(er => {
                dispatch(forecastFailed(er));
            });
    }
};

/* 
M - [DEFAULT] Metric (Celcius, m/s, mm)
S - Scientific (Kelvin, m/s, mm)
I - Fahrenheit (F, mph, in)
*/