'use strict';

import Vuex, {ActionTree, GetterTree, Module, MutationTree} from 'vuex';
import Getters from './Getters';
import Mutations from './Mutations';
import Actions from './Actions';
import Vue from "vue";
import State from './State';

Vue.use(Vuex);

const state = new State();
const getters: GetterTree<State, any> = Getters;
const mutations: MutationTree<State> = Mutations;
const actions: ActionTree<State, any> = Actions;

const store: Module<State, any> = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};

export default store;

export const MODULE_NAME = 'WeatherModule';
