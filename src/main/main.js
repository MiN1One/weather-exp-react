export default {

    // Add translations

    en: {
        months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        weekdays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
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
        loader: {
            data: 'Fetching current weather ...',
            forc: 'Retrieving forecast ...'
        }
    },

    /////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////

    de: {
        months: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
        weekdays: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
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
        loader: {
            data: 'Aktuelles Wetter abrufen ...',
            forc: 'Prognose abrufen ...'
        }
    },

    /////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////

    es: {
        months: ['Enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
        weekdays: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
        main_top: {
            searchFor: 'Clima para',
            realFeel: 'Real feel',
        },
        details: {
            pop: 'Precipitación',
            pres: 'Presión',
            clouds: 'Cubierta de nubes',
            wind_spd: 'Velocidad del viento',
            wind_cdir_full: 'Dirección del viento',
            rh: 'Humedad',
            uv: 'índice UV',
            sun_rise_set: 'Amanecer / puesta',
            obs_time: 'Hora de la última observación',
            low_temp: 'Temperatura más baja'
        },
        toolbar: {
            title: 'Herramientas:',
            print: 'Imprimir',
            printP: 'Deshabilitado debido a <br/> razones de compatibilidad.',
            clear: 'Clear',
            update: 'Actualizar',
            updateP: 'Actualizar datos <br/> meteorológicos actuales',
            searchField: 'Busca tu ciudad',
            searchBtn: 'Buscar',
            recentSearches: 'Búsquedas recientes',
        },
        units: {
            title: 'Unidades meteorológicas:',
            list: [
                {
                    title: 'Métrico (Celcius, m / s, mm)',
                    secondary: 'Métrico',
                    value: 'M'
                },
                {
                    title: 'Imperial (Farenheit, mph, in)',
                    secondary: 'Imperial',
                    value: 'I'
                },
                {
                    title: 'Científico (Kelvin, m / s, mm)',
                    secondary: 'Científico',
                    value: 'S'
                }
            ]
        },
        lang: {
            title: 'Conjunto de idiomas:'
        },
        error: {
            inv_input_main: 'No se pudo realizar la búsqueda',
            inv_input_sub: 'Por favor, ingrese una entrada de búsqueda válida.',
            notfound_main: 'No se encuentra la página solicitada',
            notfound_sub: 'Por favor, asegúrese de haber escrito una URL válida',
            someerr_main: 'Vaya, algo salió mal ...',
            someerr_sub: 'Esto puede deberse a las siguientes razones:',
            someerr_res: [
                'Entrada de búsqueda no válida',
                'Mala conexión de Internet',
                'El servidor no está respondiendo'
            ]
        },
        intro_about: {
            note: '¡NOTA! El idioma ruso y la hora del amanecer / puesta están en la etapa ALPHA. ',
            plsSearch: 'Busque su región para recuperar datos meteorológicos.',
            srcCode: 'Código fuente en github',
            main: 'Desarrollado por <a href="https://www.weatherbit.io/"> WeatherBit. </a> Desarrollado solo con fines de aprendizaje en la práctica por <a href = "https://t.me / nodirbek_u "> MiN1One. </a> ',
            features: [
                'Soporte de idiomas: inglés, alemán, ruso',
                'Unidades meteorológicas: métricas, imperiales, científicas',
                'Pronóstico detallado de 15 días',
                'Lista de búsquedas recientes'
            ]
        },
        next: 'DÍA SIGUIENTE',
        prev: 'DÍA ANTERIOR',
        loader: {
            data: 'Obteniendo el tiempo actual ...',
            forc: 'Recuperando previsión ...'
        }
    }
}