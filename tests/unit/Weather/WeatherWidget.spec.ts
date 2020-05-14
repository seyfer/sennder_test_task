import {getLocalVue} from "../helpers";
import {mount} from "@vue/test-utils";
import WeatherWidget from "@/components/Weather/WeatherWidget.vue";
import TemperatureView from "@/components/Weather/TemperatureView.vue";
import store from "../../../src/store";
import mockWeatherLondon from '../../fixtures/weather_london.json';

const localVue = getLocalVue();
jest.mock('@/components/Weather/WeatherApi.ts', () => {
    return function () {
        return {
            loadWeatherByLocation: () => {
                return {
                    data: mockWeatherLondon,
                };
            },
        };
    };
});

describe("WeatherWidget", () => {
    it("renders", done => {
        const wrapper = mount(WeatherWidget, {
            localVue,
            store,
            propsData: {
                location: "London",
            },
        });

        setTimeout(() => {
            expect(wrapper.contains(TemperatureView)).toBe(true);
            expect(wrapper.find('#weather-temperature-view').text()).toContain('7.17°C');
            expect(wrapper.text()).toContain('Drizzle');
            expect(wrapper.text()).toContain('London');

            done();
        });
    });
});
