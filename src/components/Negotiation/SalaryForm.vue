<template>
    <div :class="$style.salaryFormContainer">
        <b-alert variant="success" v-model="submitted">
            This form was already submitted
        </b-alert>
        <b-form @submit.prevent="onSubmit" :class="$style.salaryForm" inline v-if="!submitted">
            <b-form-group label="Salary:" label-for="salaryNumber" :class="$style.salaryFormGroup">
                <b-input-group prepend="$">
                    <b-form-input
                            name="salaryNumber"
                            type="number"
                            v-model.number.trim.lazy="salaryNumber"
                    />
                </b-input-group>
                <b-form-invalid-feedback :state="!(submitBtnClicked && !isValid)">
                    Please enter any number greater than 0
                </b-form-invalid-feedback>
            </b-form-group>
            <b-button type="submit" variant="primary" :class="$style.salaryFormButton">
                Submit
            </b-button>
        </b-form>
    </div>
</template>

<script lang="ts">
    'use strict';

    import {Component, Vue, Watch} from "vue-property-decorator";

    @Component
    export default class SalaryForm extends Vue {
        salaryNumber = 0;
        submitted = false;
        submitBtnClicked = false;

        onSubmit() {
            this.submitBtnClicked = true;

            if (this.isValid) {
                this.submitted = true;
                this.$emit('onSalarySubmit', this.salaryNumber);
            }
        }

        @Watch('salaryNumber', {deep: true})
        async onSalaryNumberChange(value: number) {
            if (value < 0) {
                await this.$nextTick();
                this.salaryNumber = 0;
            }
        }

        get isValid() {
            return this.salaryNumber > 0;
        }
    }
</script>

<style module lang="scss">
    .salaryFormContainer {
        text-align: center;
    }

    .salaryForm {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        flex-direction: column;
    }

    .salaryFormGroup {
        width: 100%;
        flex-wrap: nowrap !important;
        margin: 10px 0;

        > div, input {
            width: 100% !important;
        }

        label {
            margin-right: 10px;
        }
    }

    .salaryFormButton {
        margin-top: 10px;
    }
</style>

<style scoped lang="scss">
    .bv-no-focus-ring {
        width: 100%;
    }
</style>
