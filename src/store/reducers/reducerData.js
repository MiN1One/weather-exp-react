import actionTypes from '../actions/actionTypes';

const initialState = {
    units: localStorage.getItem('weatherAppUnit') ? localStorage.getItem('weatherAppUnit') : 'M',
    search: null,
    error: null,
    lang: localStorage.getItem('weatherAppLang') ? localStorage.getItem('weatherAppLang') : 'en',
    loading: false,
    data: null,
    forecast: null,
    intro: true,
    history: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_UNITS:
            return {
                ...state,
                units: action.units
            };
        case actionTypes.CHANGE_LANG:
            return {
                ...state,
                lang: action.lang
            };
        case actionTypes.INPUT_RECIEVED:
            return {
                ...state,
                search: action.input
            };
        case actionTypes.SEARCH_START:
            return {
                ...state,
                loading: true,
                data: null,
                forecast: null,
                error: null,
                intro: false
            }
        case actionTypes.SEARCH_SUCCESSFUL:
            return {
                ...state,
                data: action.data,
            };
        case actionTypes.SEARCH_FAILED:
            return {
                ...state,
                error: action.error,
                loading: false,
            };
        case actionTypes.FORECAST_SUCCESSFUL:
            return {
                ...state,
                forecast: action.data,
                loading: false
            }
        case actionTypes.FORECAST_FAILED:
            return {
                ...state,
                error: action.error,
                loading: false
            }
        case actionTypes.CLEAR_DATA:
            return {
                ...state,
                search: null,
                data: null,
                forecast: null,
                intro: true,
                error: null
            };
        case actionTypes.READ_QUERY:
            return {
                ...state,
                search: action.query
            }
        case actionTypes.STORE_RECENT_SEARCH:
            return {
                ...state,
                history: action.history
            }
        case actionTypes.READ_STORE:
            return {
                ...state,
                history: action.historyList,
                // lang: action.lang
            }
        default: return state;
    }
};

export default reducer;
