'use strict';

import {MutationTree} from "vuex";
import State from "@/store/module/Weather/State";

const actions: MutationTree<State> = {
    setWeatherModel(state, value) {
        state.weatherModel = value;
    },
};

export default actions;
