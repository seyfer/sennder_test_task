<template>
    <div :class="$style.salaryFormContainer">
        <b-alert variant="success" v-model="submitted">
            This form was already submitted
        </b-alert>
        <b-form @submit.prevent="onSubmit" :class="$style.salaryForm" inline v-if="!submitted">
            <b-form-group label="Salary:" label-for="salaryNumber" :class="$style.salaryFormGroup">
                <b-form-input
                        name="salaryNumber"
                        type="number"
                        v-model.number.trim.lazy="salaryNumber"
                />
                <b-form-invalid-feedback :state="validation">
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
    import {Component, Vue} from "vue-property-decorator";

    @Component
    export default class SalaryForm extends Vue {
        salaryNumber = 1;
        submitted = false;

        onSubmit() {
            if (this.salaryNumber <= 0) {
                return;
            }

            this.submitted = true;
            this.$emit('onSalarySubmit', this.salaryNumber);
        }

        get validation() {
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

        div, input {
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
