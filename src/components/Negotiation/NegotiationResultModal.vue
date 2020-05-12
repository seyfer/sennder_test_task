<template>
    <b-modal :id="modalId"
             centered
             title="Negotiation Result Modal"
             hide-header-close
             @hidden="onClosedModal"
    >
        <template v-slot:modal-header>
            <slot name="header" />
        </template>
        <slot />
        <template v-slot:modal-footer="{ ok }">
            <b-button size="sm" variant="success" @click="ok">
                OK
            </b-button>
        </template>
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

<style lang="scss">
    .modal-dialog {
        .modal-header {
            justify-content: center;
        }

        .btn-success {
            min-width: 100px;
        }
    }
</style>
