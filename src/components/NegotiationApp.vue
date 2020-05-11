<template>
    <b-card no-body>
        <b-tabs card fill>
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
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import NegotiationAppTab from "@/components/NegotiationAppTab.vue";
    import SalaryForm from "@/components/SalaryForm.vue";
    import {Mutation} from "vuex-class";

    @Component({
        components: {SalaryForm, NegotiationAppTab},
    })
    export default class NegotiationApp extends Vue {
        @Mutation('setEmployerProposedSalary') setEmployerProposedSalary!: (value: number) => void
        @Mutation('setEmployeeRequestedSalary') setEmployeeRequestedSalary!: (value: number) => void

        onEmployerSalarySubmit(salary: number) {
            this.setEmployerProposedSalary(salary);
        }

        onEmployeeSalarySubmit(salary: number) {
            this.setEmployeeRequestedSalary(salary);
        }
    }
</script>

<style module lang="scss">
    .cardBody {
        background-color: red;
    }
</style>
