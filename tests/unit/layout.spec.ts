import { createLocalVue, shallowMount } from "@vue/test-utils";
import Layout from "@/components/Layout.vue";
import BootstrapVue from "bootstrap-vue";

// create an extended `Vue` constructor
const localVue = createLocalVue();

// install plugins as normal
localVue.use(BootstrapVue);

describe("Layout", () => {
    it("renders", () => {
        const msg = "Negotiation App";
        const wrapper = shallowMount(Layout, { localVue });
        expect(wrapper.text()).toMatch(msg);
    });
});
