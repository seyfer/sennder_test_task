'use strict';

import {MutationTree} from "vuex";
import State from "@/store/State";

const actions: MutationTree<State> = {
    setEmployerProposedSalary(state, value: number) {
        state.employerProposedSalary = value;
    },
    setEmployeeRequestedSalary(state, value: number) {
        state.employeeRequestedSalary = value;
    },
};

export default actions;
