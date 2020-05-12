'use strict';

import Axios, {AxiosInstance} from 'axios';

export default class WeatherApi {
    apiKey = '439d4b804bc8187953eb36d2a8c26a02';
    axios: AxiosInstance;
    weatherBaseUrl = 'https://samples.openweathermap.org/data/2.5/weather';
    corsProxy = 'https://cors-anywhere.herokuapp.com/';

    constructor(withCorsProxy = true) {
        const baseURL = withCorsProxy
            ? this.corsProxy + this.weatherBaseUrl
            : this.weatherBaseUrl;

        this.axios = Axios.create({
            baseURL,
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: false,
        });
    }

    async loadWeatherByLocation(location: string): Promise<any> {
        return this.axios.get('', {params: {q: location, appid: this.apiKey}});
    }
}
