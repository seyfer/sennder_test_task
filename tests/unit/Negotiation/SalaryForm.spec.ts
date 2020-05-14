import {mount} from "@vue/test-utils";
import {getLocalVue} from "../helpers";
import SalaryForm from "@/components/Negotiation/SalaryForm.vue";
import {BButton, BForm, BFormInput, BFormInvalidFeedback} from "bootstrap-vue";

const localVue = getLocalVue();
describe("SalaryForm", () => {
    it("renders and error logic works", () => {
        const wrapper = mount(SalaryForm, {
            localVue,
        });

        expect(wrapper.contains(BFormInput)).toBe(true);
        expect(wrapper.get('label').text()).toEqual('Salary:');
        expect(wrapper.get(BButton).text()).toContain('Submit');
    });

    it("shows error", done => {
        const wrapper = mount(SalaryForm, {
            localVue,
        });
        wrapper.get(BFormInput).setValue(0);
        expect((wrapper.get(BFormInput).element as HTMLInputElement).value).toEqual("0");
        expect(wrapper.get(BFormInvalidFeedback).classes()).not.toContain('d-block');
        expect(wrapper.contains('.alert')).toBe(false);

        wrapper.find(BButton).trigger('click');

        setTimeout(() => {
            expect(wrapper.get(BFormInvalidFeedback).classes()).toContain('d-block');
            expect(wrapper.contains('.alert')).toBe(false);

            done();
        });
    });

    it("hides error on correct value", done => {
        const wrapper = mount(SalaryForm, {
            localVue,
        });
        wrapper.find(BFormInput).setValue(100);
        expect((wrapper.get(BFormInput).element as HTMLInputElement).value).toEqual("100");
        expect(wrapper.get(BFormInvalidFeedback).classes()).not.toContain('d-block');
        expect(wrapper.contains('.alert')).toBe(false);

        wrapper.find(BForm).trigger('submit');

        setTimeout(() => {
            expect(wrapper.contains(BFormInvalidFeedback)).toBe(false);
            expect(wrapper.contains('.alert')).toBe(true);
            expect(wrapper.get('.alert').text()).toEqual('This form was already submitted');

            done();
        });
    });
});
