'use strict';

import {ActionTree} from "vuex";
import State from "@/store/module/Weather/State";
import WeatherApi from "@/components/Weather/WeatherApi";

const weatherApi = new WeatherApi();

const actions: ActionTree<State, any> = {
    async loadWeatherByLocation({commit}, location: string) {
        try {
            const response = await weatherApi.loadWeatherByLocation(location);
            commit('setWeatherModel', response?.data ?? {});
        } catch (e) {
            console.log(e);
        }
    },
};

export default actions;
