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

        <NegotiationResultModal
                :show-modal="salariesAreReady"
                @onClosedModal="onClosedModal"
        >
            <h5 slot="header" :class="negotiationSuccess ? 'text-success' : 'text-danger'">
                {{ negotiationSuccess ? 'Success!' : 'Failure!' }}
            </h5>
            <div>Maximum offer was: <strong>{{ employerProposedSalary }}</strong></div>
            <div>Minimum expected salary was: <strong>{{ employeeRequestedSalary }}</strong></div>

            <div :class="$style.weatherContainer">
                <WeatherWidget location="London" />
            </div>
        </NegotiationResultModal>
    </div>
</template>

<script lang="ts">
    'use strict';

    import {BIcon, BIconBuilding, BIconBriefcase} from 'bootstrap-vue';
    import {Component, Vue} from "vue-property-decorator";
    import NegotiationAppTab from "@/components/Negotiation/NegotiationAppTab.vue";
    import SalaryForm from "@/components/Negotiation/SalaryForm.vue";
    import {namespace} from "vuex-class";
    import NegotiationResultModal from "@/components/Negotiation/NegotiationResultModal.vue";
    import WeatherWidget from "@/components/Weather/WeatherWidget.vue";
    import {MODULE_NAME} from '@/store/module/Negotiation/NegotiationModule';

    const negotiationStore = namespace(MODULE_NAME);

    @Component({
        components: {
            WeatherWidget, NegotiationResultModal, SalaryForm, NegotiationAppTab,
            BIcon, BIconBuilding, BIconBriefcase,
        },
    })
    export default class NegotiationApp extends Vue {
        tabIndex = 0;
        renderComponent = true;

        @negotiationStore.State('employerProposedSalary') employerProposedSalary!: number;
        @negotiationStore.State('employeeRequestedSalary') employeeRequestedSalary!: number;
        @negotiationStore.Mutation('setEmployerProposedSalary') setEmployerProposedSalary!: (value: number) => void;
        @negotiationStore.Mutation('setEmployeeRequestedSalary') setEmployeeRequestedSalary!: (value: number) => void;

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

    .weatherContainer {
        margin: 20px auto;
    }
</style>
