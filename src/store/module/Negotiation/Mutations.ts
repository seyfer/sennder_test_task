'use strict';

import {MutationTree} from "vuex";
import State from "@/store/module/Negotiation/State";

const actions: MutationTree<State> = {
    setEmployerProposedSalary(state, value: number) {
        state.employerProposedSalary = value;
    },
    setEmployeeRequestedSalary(state, value: number) {
        state.employeeRequestedSalary = value;
    },
};

export default actions;
