'use strict';

import Axios, {AxiosInstance} from "axios";

class WeatherAxios {
    private weatherBaseUrl = 'https://samples.openweathermap.org/data/2.5/weather';
    public readonly corsProxy = 'https://cors-anywhere.herokuapp.com/';
    static axios: AxiosInstance;

    constructor(
        withCorsProxy = true,
    ) {
        const baseURL = withCorsProxy
            ? this.corsProxy + this.weatherBaseUrl
            : this.weatherBaseUrl;

        WeatherAxios.axios = Axios.create({
            baseURL,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    static getInstance(withCorsProxy = true): AxiosInstance {
        if (WeatherAxios.axios) {
            return WeatherAxios.axios;
        }

        new WeatherAxios(withCorsProxy);
        return WeatherAxios.axios;
    }
}


export default WeatherAxios;
