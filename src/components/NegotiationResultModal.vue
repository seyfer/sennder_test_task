<template>
    <b-modal :id="modalId"
             centered
             title="Negotiation Result Modal"
             hide-header-close
             hide-footer
             @hidden="onClosedModal"
    >
        <slot />
    </b-modal>
</template>

<script lang="ts">
    import {Component, Prop, Vue, Watch} from "vue-property-decorator";

    @Component
    export default class NegotiationResultModal extends Vue {
        modalId = "NegotiationResultModal";
        @Prop({required: true, type: Boolean, default: false}) readonly showModal!: boolean;

        @Watch('showModal')
        onShowModalChange(value: boolean) {
            if (value) {
                this.$bvModal.show(this.modalId);
            } else {
                this.$bvModal.hide(this.modalId);
            }
        }

        onClosedModal() {
            this.$emit('onClosedModal');
        }
    }
</script>

<style module lang="scss">

</style>
