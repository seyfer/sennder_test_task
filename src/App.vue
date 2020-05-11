<template>
    <AppLayout />
</template>

<script lang="ts">
    'use strict';

    import {Component, Vue} from "vue-property-decorator";
    import AppLayout from "./components/AppLayout.vue";

    @Component({
        components: {
            AppLayout,
        },
    })
    export default class App extends Vue {
    }
</script>
