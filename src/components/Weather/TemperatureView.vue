<template>
    <span>{{ temperatureView[0] }}{{ temperatureView[1] }}</span>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";
    import {TemperatureUnit} from "./constants";

    @Component
    export default class TemperatureView extends Vue {
        @Prop({
            type: String,
            required: true,
        }) readonly temperatureUnit!: TemperatureUnit;
        @Prop({
            type: Number,
            required: true,
        }) readonly temperature!: number;

        get temperatureView(): [number, string] {
            if (!this.temperature) {
                return [0, ''];
            }

            switch (this.temperatureUnit) {
                case TemperatureUnit.CELSIUS:
                    return [Number((this.temperature - 273.15).toFixed(2)), '°C'];
                case TemperatureUnit.FAHRENHEIT:
                    return [Number(((this.temperature - 273.15) * 9 / 5 + 32).toFixed(2)), '°F'];
                case TemperatureUnit.KELVIN:
                default:
                    return [Number(this.temperature.toFixed(2)), 'K'];
            }
        }
    }
</script>
