'use strict';

import {AxiosInstance} from 'axios';
import WeatherPayload from "@/components/Weather/WeatherPayload";
import WeatherAxios from "@/components/Weather/WeatherAxios";

export default class WeatherApi {
    private axios: AxiosInstance;
    private readonly apiKey: string = '';

    constructor(
        withCorsProxy = true,
        apiKey: string | null = null,
    ) {
        if (apiKey) {
            this.apiKey = apiKey;
        }

        this.axios = WeatherAxios.getInstance(withCorsProxy);
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
