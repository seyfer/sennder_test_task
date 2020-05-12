'use strict';

import Vuex, {Module, MutationTree} from 'vuex';
import Mutations from './Mutations';
import Vue from "vue";
import State from './State';

Vue.use(Vuex);

const state = new State();
const mutations: MutationTree<State> = Mutations;

const store: Module<State, any> = {
    namespaced: true,
    state,
    mutations,
};

export default store;

export const MODULE_NAME = 'NegotiationModule';
