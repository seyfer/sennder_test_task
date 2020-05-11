'use strict';

import Vuex, {ActionTree, GetterTree, Module, MutationTree, Store, StoreOptions} from 'vuex';
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

const storeOptions: StoreOptions<any> & Module<State, any> = {
    strict: process.env.NODE_ENV !== 'production',
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};

const store = new Store(storeOptions);

export default store as Store<any>;
