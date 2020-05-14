import {getLocalVue} from "./helpers";
import {shallowMount} from "@vue/test-utils";
import AppContainer from "@/components/AppContainer.vue";
import NegotiationApp from "@/components/Negotiation/NegotiationApp.vue";

const localVue = getLocalVue();

describe("AppContainer", () => {
    it("renders", () => {
        const wrapper = shallowMount(AppContainer, {localVue});
        wrapper.contains(NegotiationApp);
    });
});
