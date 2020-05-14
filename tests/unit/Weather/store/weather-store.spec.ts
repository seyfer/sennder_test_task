import {getLocalVue} from "../../helpers";
import Vuex from 'vuex';
import WeatherModule from "../../../../src/store/module/Weather/WeatherModule";
import mockWeatherLondon from '../../../fixtures/weather_london.json';

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

describe('library-store.js', () => {
    test('api and mutations are called on loadQuestionnaire', done => {
        const localVue = getLocalVue();
        localVue.use(Vuex);
        const store = new Vuex.Store(WeatherModule);
        store.dispatch('loadWeatherByLocation', 'London');

        //because dispatch is async
        setTimeout(() => {
            expect(store.state.weatherModel).toBeInstanceOf(Object);
            expect(store.state.weatherModel).toEqual({
                "clouds": 90,
                "description": "light intensity drizzle",
                "humidity": 81,
                "location": "London",
                "pressure": 1012,
                "shortDescription": "Drizzle",
                "temperature": 280.32,
                "windSpeed": 4.1,
            });

            done();
        });
    });
});
