import {shallowMount} from "@vue/test-utils";
import store from "@/store";
import NegotiationApp from "@/components/Negotiation/NegotiationApp.vue";
import {getLocalVue} from "../helpers";
import NegotiationAppTab from "@/components/Negotiation/NegotiationAppTab.vue";
import NegotiationResultModal from "@/components/Negotiation/NegotiationResultModal.vue";

const localVue = getLocalVue();
describe("NegotiationApp", () => {
    it("renders", () => {
        const wrapper = shallowMount(NegotiationApp, {
            localVue,
            store,
        });

        expect(wrapper.contains(NegotiationAppTab)).toBe(true);
        expect(wrapper.contains(NegotiationResultModal)).toBe(true);
    });
});
