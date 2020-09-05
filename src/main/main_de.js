export default {
    main_top: {
        searchFor: 'Wetter für',
        realFeel: "Echtes Gefühl",
    },
    details: {
        pop: 'Niederschlag',
        pres: 'Druck',
        clouds: 'Wolkendecke',
        wind_spd: 'Windgeschwindigkeit',
        rh: 'Luftfeuchtigkeit',
        uv: 'UV-Index',
        wind_cdir_full: 'Windrichtung',
        sun_rise_set: 'Sonnenaufgang/untergang',
        obs_time: 'Letzte Beobachtungszeit',
        low_temp: 'Niedrigste Temperatur'
    },
    toolbar: {
        title: 'Werkzeuge:',
        print: 'Print',
        printP: 'Aus Gründen der <br/> Kompatibilität deaktiviert.',
        clear: 'Klar',
        update: 'Update',
        updateP: 'Aktuelle <br/> Wetterdaten aktualisieren',
        searchField: 'Suche nach deiner Stadt',
        searchBtn: 'Suche',
        recentSearches: 'Letzte Suchanfragen',
    },
    units: {
        title: 'Wettereinheiten:',
        list: [
            {
                title: 'Metrik (Celcius, m/s, mm)',
                value: 'M'
            },
            { 
                title: 'Imperial (Farenheit, mph, in)',
                value: 'I'
            },
            {
                title: 'Wissenschaftlich (Kelvin, m/s, mm)',
                value: 'S'
            }
        ]
    },
    lang: {
        title: 'Sprachensatz:',
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
        inv_input_main: 'Suche konnte nicht durchgeführt werden',
        inv_input_sub: 'Bitte geben Sie eine gültige Sucheingabe ein.',
        notfound_main: 'Angeforderte Seite wurde nicht gefunden',
        notfound_sub: 'Bitte stellen Sie sicher, dass Sie eine gültige URL eingegeben haben.',
        someerr_main: 'Ups, etwas ist schief gelaufen ...',
        someerr_sub: 'Dies kann folgende Gründe haben:',
        someerr_res: [
            'Ungültige Sucheingabe',
            'Schlechte Internetverbindung',
            'Server antwortet nicht'
        ],
    },
    intro_about: {
        note: 'Die russische Sprache und die Sonnenaufgang/untergang befinden sich in der ALPHA-Phase',
        plsSearch: 'Suche nach deiner Region, um Wetterdaten abzurufen.',
        srcCode: 'Quellcode auf Github',
        main: 'Unterstützt von <a href="https://www.weatherbit.io/"> WeatherBit. </a> Entwickelt nur zum Lernen in der Praxis von <a href = "https://t.me / nodirbek_u "> MiN1One. </a> ',
        features: [
            'Sprachunterstützung - Englisch, Niederländisch, Russisch',
            'Wettereinheiten - metrisch, imperial, wissenschaftlich',
            '15-tägige detaillierte Prognose ',
            'Liste der letzten Suchanfragen'
        ]
    },
    next: 'NÄCHSTER TAG',
    prev: 'VORHERIGER TAG',
};