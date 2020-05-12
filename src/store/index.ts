'use strict';

import Vuex, {Store, StoreOptions} from 'vuex';
import Vue from "vue";
import NegotiationModule from './module/Negotiation/NegotiationModule';
import WeatherModule from './module/Weather/WeatherModule';

Vue.use(Vuex);

const storeOptions: StoreOptions<any> = {
    strict: process.env.NODE_ENV !== 'production',
    modules: {
        NegotiationModule,
        WeatherModule,
    },
};

const store = new Store(storeOptions);

export default store as Store<any>;
