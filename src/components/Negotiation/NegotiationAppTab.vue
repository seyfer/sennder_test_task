<template>
    <b-tab :active="active">
        <template v-slot:title>
            <slot name="icon">
                <!-- default icon -->
                <b-icon-app />
            </slot>
            {{ title }}
        </template>
        <b-card-body>
            <slot />
        </b-card-body>
    </b-tab>
</template>

<script lang="ts">
    'use strict';

    import {Component, Prop, Vue} from "vue-property-decorator";
    import AppContainer from "@/components/AppContainer.vue";
    import {BIcon, BIconApp} from "bootstrap-vue";

    @Component({
        components: {AppContainer, BIcon, BIconApp},
    })
    export default class NegotiationAppTab extends Vue {
        @Prop({required: true, type: String}) readonly title!: string;
        @Prop({required: false, type: Boolean, default: false}) readonly active!: boolean;
    }
</script>
