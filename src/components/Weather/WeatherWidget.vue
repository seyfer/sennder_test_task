<template>
    <div v-if="location">
        <template v-if="!ready">
            Loading...
            <b-spinner small variant="primary" label="Spinning" />
        </template>
        <template v-else>
            By the way, there is a weather in {{ location }}:
            <strong>
                <TemperatureView :temperature-unit="temperatureUnit" :temperature="temperature" />
                , {{ weatherDescription }}
            </strong>
        </template>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";
    import {TemperatureUnit} from "@/components/Weather/constants";
    import TemperatureView from "@/components/Weather/TemperatureView.vue";
    import {namespace} from "vuex-class";
    import {isEmpty} from 'lodash';
    import {MODULE_NAME} from "@/store/module/Weather/WeatherModule";

    const weatherStore = namespace(MODULE_NAME);

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

        @weatherStore.Action('loadWeatherByLocation') loadWeatherByLocation!: (location: string) => Promise<any>;
        @weatherStore.State('weatherModel') weatherModel!: {
            main: {
                temp: number;
            };
            weather: [
                {
                    id: number;
                    main: string;
                    description: string;
                    icon: string;
                },
            ];
        };

        get ready() {
            return !isEmpty(this.weatherModel);
        }

        get temperature() {
            return this.weatherModel?.main.temp ?? undefined;
        }

        get weatherDescription() {
            return this.weatherModel?.weather?.[0]?.main ?? undefined;
        }

        mounted() {
            if (isEmpty(this.weatherModel)) {
                this.loadWeatherByLocation(this.location);
            }
        }
    }
</script>
