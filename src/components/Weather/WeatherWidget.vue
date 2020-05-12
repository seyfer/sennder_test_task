<template>
    <div v-if="location">
        By the way, there is a weather in {{ location }}:
        {{ temperature[0] }}{{ temperature[1] }}, {{ weatherDescription }}
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";
    import {TemperatureUnit} from "@/components/Weather/constants";

    @Component
    export default class WeatherWidget extends Vue {
        @Prop({type: String, required: true}) readonly location!: string;
        @Prop({
            type: String,
            required: false,
            default: TemperatureUnit.CELSIUS,
        }) readonly temperatureUnit!: TemperatureUnit;

        //mock
        weatherData = {
            main: {
                temp: 280.32,
            },
            weather: [
                {
                    id: 300,
                    main: "Drizzle",
                    description: "light intensity drizzle",
                    icon: "09d",
                },
            ],
        }

        get temperature(): [number, string] {
            if (!this.weatherData) {
                return [0, ''];
            }

            const temperature = this.weatherData.main.temp;
            switch (this.temperatureUnit) {
                case TemperatureUnit.CELSIUS:
                    return [Number((temperature - 273.15).toFixed(2)), '°C'];
                case TemperatureUnit.FAHRENHEIT:
                    return [Number(((temperature - 273.15) * 9 / 5 + 32).toFixed(2)), '°F'];
                case TemperatureUnit.KELVIN:
                default:
                    return [Number(temperature.toFixed(2)), 'K'];
            }
        }

        get weatherDescription() {
            return this.weatherData?.weather?.[0]?.main ?? undefined;
        }
    }
</script>

<style scoped lang="scss">

</style>
