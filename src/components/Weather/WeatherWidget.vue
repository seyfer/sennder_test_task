<template>
    <div v-if="location">
        <template v-if="!ready">
            Loading...
            <b-spinner small variant="primary" label="Spinning" />
        </template>
        <template v-else>
            By the way, there is a weather in {{ location }}:
            <strong>
                <TemperatureView :temperature-unit="temperatureUnit" :temperature="temperature" />, {{ weatherDescription }}
            </strong>
        </template>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";
    import {TemperatureUnit} from "@/components/Weather/constants";
    import TemperatureView from "@/components/Weather/TemperatureView.vue";
    import WeatherApi from "@/components/Weather/WeatherApi";
    @Component({
        components: {TemperatureView},
    })
    export default class WeatherWidget extends Vue {
        @Prop({type: String, required: true}) readonly location!: string;
        @Prop({
            type: String,
            required: false,
            default: TemperatureUnit.CELSIUS,
        }) readonly temperatureUnit!: TemperatureUnit;

        //mock
        weatherModel: {
            main: {
                temp: 280.32;
            };
            weather: [
                {
                    id: 300;
                    main: "Drizzle";
                    description: "light intensity drizzle";
                    icon: "09d";
                },
            ];
        } | undefined = {
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
        };

        get ready() {
            return this.weatherModel !== undefined;
        }

        get temperature() {
            return this.weatherModel?.main.temp ?? undefined;
        }

        get weatherDescription() {
            return this.weatherModel?.weather?.[0]?.main ?? undefined;
        }

        async mounted() {
            try {
                const response = await (new WeatherApi()).loadWeatherByLocation(this.location);
                console.log(response);
            } catch (e) {
                console.log(e);
            }
        }
    }
</script>
