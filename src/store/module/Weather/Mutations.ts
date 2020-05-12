'use strict';

import {MutationTree} from "vuex";
import State from "@/store/module/Weather/State";

const mutations: MutationTree<State> = {
    setWeatherModel(state, value) {
        state.weatherModel = value;
    },
};

export default mutations;
