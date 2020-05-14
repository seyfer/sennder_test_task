'use strict';

import {shallowMount} from "@vue/test-utils";
import AppLayout from "@/components/AppLayout.vue";
import {BIconPeople} from "bootstrap-vue";
import AppContainer from "@/components/AppContainer.vue";
import {getLocalVue} from "./helpers";

const localVue = getLocalVue();

describe("AppLayout", () => {
    it("renders", () => {
        const msg = "Negotiation App";
        const wrapper = shallowMount(AppLayout, {localVue});
        expect(wrapper.text()).toMatch(msg);
        wrapper.contains(AppContainer);
        wrapper.contains(BIconPeople);
    });
});
