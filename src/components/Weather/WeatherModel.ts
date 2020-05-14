'use strict';

import WeatherPayload from "@/components/Weather/WeatherPayload";

export default class WeatherModel {
    temperature: number;
    pressure: number;
    humidity: number;
    shortDescription: string;
    description: string;
    windSpeed: number;
    clouds: number;
    location: string;

    constructor(weatherData: WeatherPayload) {
        this.temperature = weatherData.main.temp;
        this.pressure = weatherData.main.pressure;
        this.humidity = weatherData.main.humidity;
        this.shortDescription = weatherData.weather[0].main;
        this.description = weatherData.weather[0].description;
        this.windSpeed = weatherData.wind.speed;
        this.clouds = weatherData.clouds.all;
        this.location = weatherData.name;
    }
}
