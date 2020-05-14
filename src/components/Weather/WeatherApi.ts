'use strict';

import Axios, {AxiosInstance} from 'axios';
import WeatherPayload from "@/components/Weather/WeatherPayload";

export default class WeatherApi {
    private readonly apiKey: string = '98baa908d5b96e101af37a359fe39bb3';
    private axios: AxiosInstance;
    private weatherBaseUrl = 'https://samples.openweathermap.org/data/2.5/weather';
    public readonly corsProxy = 'https://cors-anywhere.herokuapp.com/';

    constructor(
        withCorsProxy = true,
        apiKey: string | null = null,
    ) {
        const baseURL = withCorsProxy
            ? this.corsProxy + this.weatherBaseUrl
            : this.weatherBaseUrl;

        this.axios = Axios.create({
            baseURL,
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (apiKey) {
            this.apiKey = apiKey;
        }
    }

    set client(newClient) {
        this.axios = newClient;
    }

    get client() {
        return this.axios;
    }

    async loadWeatherByLocation(location: string): Promise<{ data: WeatherPayload }> {
        return this.client.get('', {params: {q: location, appid: this.apiKey}});
    }
}
