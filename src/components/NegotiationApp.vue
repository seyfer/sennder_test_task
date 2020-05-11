<template>
    <div>
        <b-card no-body v-if="renderComponent">
            <b-tabs card justified v-model="tabIndex">
                <NegotiationAppTab title="Employer-Tab" active>
                    <b-icon-building slot="icon" />
                    <SalaryForm @onSalarySubmit="onEmployerSalarySubmit" />
                </NegotiationAppTab>
                <NegotiationAppTab title="Employee-Tab">
                    <b-icon-briefcase slot="icon" />
                    <SalaryForm @onSalarySubmit="onEmployeeSalarySubmit" />
                </NegotiationAppTab>
            </b-tabs>
        </b-card>

        <NegotiationResultModal :show-modal="salariesAreReady" @onClosedModal="onClosedModal">
            Result: {{ negotiationSuccess ? 'Success!' : 'Failure!' }}
            Proposed: {{ employerProposedSalary }}
            Requested: {{ employeeRequestedSalary }}
        </NegotiationResultModal>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import NegotiationAppTab from "@/components/NegotiationAppTab.vue";
    import SalaryForm from "@/components/SalaryForm.vue";
    import {Mutation, State} from "vuex-class";
    import NegotiationResultModal from "@/components/NegotiationResultModal.vue";

    @Component({
        components: {NegotiationResultModal, SalaryForm, NegotiationAppTab},
    })
    export default class NegotiationApp extends Vue {
        tabIndex = 0;
        renderComponent = true;

        @State('employerProposedSalary') employerProposedSalary!: number;
        @State('employeeRequestedSalary') employeeRequestedSalary!: number;
        @Mutation('setEmployerProposedSalary') setEmployerProposedSalary!: (value: number) => void;
        @Mutation('setEmployeeRequestedSalary') setEmployeeRequestedSalary!: (value: number) => void;

        onEmployerSalarySubmit(salary: number) {
            this.setEmployerProposedSalary(salary);
            if (this.employeeRequestedSalary === 0) {
                this.tabIndex++;
            }
        }

        onEmployeeSalarySubmit(salary: number) {
            this.setEmployeeRequestedSalary(salary);
            if (this.employerProposedSalary === 0) {
                this.tabIndex--;
            }
        }

        get salariesAreReady() {
            return this.employerProposedSalary > 0 && this.employeeRequestedSalary > 0;
        }

        get negotiationSuccess() {
            if (!this.salariesAreReady) {
                return false;
            }

            return this.employerProposedSalary >= this.employeeRequestedSalary;
        }

        onClosedModal() {
            this.setEmployeeRequestedSalary(0);
            this.setEmployerProposedSalary(0);
            this.forceRerender();
        }

        //cause form tabs to reset
        forceRerender() {
            this.renderComponent = false;

            this.$nextTick(() => {
                this.renderComponent = true;
            });
        }
    }
</script>

<style module lang="scss">
    .cardBody {
        background-color: red;
    }
</style>
