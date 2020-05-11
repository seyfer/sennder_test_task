import {createLocalVue, shallowMount} from "@vue/test-utils";
import AppLayout from "@/components/AppLayout.vue";
import BootstrapVue, {IconsPlugin} from "bootstrap-vue";

// create an extended `Vue` constructor
const localVue = createLocalVue();

// install plugins as normal
localVue.use(BootstrapVue);
localVue.use(IconsPlugin);

describe("Layout", () => {
    it("renders", () => {
        const msg = "Negotiation App";
        const wrapper = shallowMount(AppLayout, {localVue});
        expect(wrapper.text()).toMatch(msg);
    });
});
