<template>
    <b-tab :active="active">
        <template v-slot:title>
            <slot name="icon">
                <!-- default icon -->
                <b-icon-app />
            </slot>
            {{ title }}
        </template>
        <b-card-body :class="$style.cardBody">
            <slot />
        </b-card-body>
    </b-tab>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";

    @Component
    export default class NegotiationAppTab extends Vue {
        @Prop({required: true, type: String}) readonly title!: string;
        @Prop({required: false, type: Boolean, default: false}) readonly active!: boolean;
    }
</script>

<style module lang="scss">
    .cardBody {

    }
</style>
