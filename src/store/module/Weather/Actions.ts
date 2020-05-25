'use strict';

import {ActionTree} from "vuex";
import State from "@/store/module/Weather/State";
import WeatherApi from "@/components/Weather/WeatherApi";
import WeatherModel from "@/components/Weather/WeatherModel";

const weatherApi = new WeatherApi(true, process.env.VUE_APP_WEATHER_API_KEY);

const actions: ActionTree<State, any> = {
    async loadWeatherByLocation({commit}, location: string) {
        try {
            const response = await weatherApi.loadWeatherByLocation(location);
            commit('setWeatherModel', response?.data ? new WeatherModel(response?.data) : {});
        } catch (e) {
            console.log(e);
        }
    },
};

export default actions;
