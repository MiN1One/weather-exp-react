export default {
    main_top: {
        searchFor: 'Weather for',
        realFeel: 'Real feel',
    },
    details: {
        pop: 'Precipitation',
        pres: 'Pressure',
        clouds: 'Cloud cover',
        wind_spd: 'Wind speed',
        wind_cdir_full: 'Wind direction',
        rh: 'Humidity',
        uv: 'UV-Index',
        sun_rise_set: 'Sunrise/set',
        obs_time: 'Last observation time',
        low_temp: 'Lowest temperature'
    },
    toolbar: {
        title: 'Tools:',
        print: 'Print',
        printP: 'Disabled due to<br/>compatibility reasons.',
        clear: 'Clear',
        update: 'Update',
        updateP: 'Refresh current<br/>weather data',
        searchField: 'Search for your city',
        searchBtn: 'Search',
        recentSearches: 'Recent searches',
    },
    units: {
        title: 'Weather units:',
        list: [
            {
                title: 'Metric (Celcius, m/s, mm)',
                secondary: 'Metric',
                value: 'M'
            },
            { 
                title: 'Imperial (Farenheit, mph, in)',
                secondary: 'Imperial',
                value: 'I'
            },
            {
                title: 'Scientific (Kelvin, m/s, mm)',
                secondary: 'Scientific',
                value: 'S'
            }
        ]
    },
    lang: {
        title: 'Language set:',
        list: [
            {
                title: 'English',
                value: 'en',
                state: null
            },
            {
                title: 'Deutsch',
                value: 'de', 
                state: null
            },
            {
                title: 'Russian',
                value: 'ru', 
                state: 'disabled'
            }
        ]
    },
    error: {
        inv_input_main: 'Search could not be performed',
        inv_input_sub: 'Please, enter valid search input.',
        notfound_main: 'Requested page is not found',
        notfound_sub: 'Please, make sure you typed valid url.',
        someerr_main: 'Oops, something went wrong ...',
        someerr_sub: 'This might be due to the following reasons:',
        someerr_res: [
            'Invalid search input',
            'Bad internet connection',
            'Server is not responding'
        ]
    },
    intro_about: {
        note: 'NOTE! Russian language and sunrise/set time are in the ALPHA stage.',
        plsSearch: 'Search for your region to retrieve weather data.',
        srcCode: 'Source code on github',
        main: 'Powered by <a href="https://www.weatherbit.io/">WeatherBit.</a> Developed only for learn-in-practice purposes by <a href="https://t.me/nodirbek_u">MiN1One.</a>',
        features: [
            'Language support - English, Deutch, Russian',
            'Weather units - Metric, Imperial, Scientific',
            '15-day detailed forecast',
            'Recent searches list'
        ]
    },
    next: 'NEXT DAY',
    prev: 'PREVIOUS DAY',
};