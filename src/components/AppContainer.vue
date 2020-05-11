<template>
    <b-container :class="$style.container">
        <b-row :class="$style.row">
            <b-col cols="12" md="12">
                <NegotiationApp />
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    import NegotiationApp from '@/components/NegotiationApp';
    export default {
        components: {NegotiationApp},
    };
</script>

<style module lang="scss">
    .container {
        min-height: 500px;
        display: flex;
        justify-content: center;
        width: 100%;
    }

    .row {
        width: 100%;
    }
</style>
