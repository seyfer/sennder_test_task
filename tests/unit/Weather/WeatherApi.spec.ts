jest.unmock("axios");
import WeatherApi from "@/components/Weather/WeatherApi";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

describe("WeatherApi", () => {
    it('loads weather by location', async () => {
        const location = 'London';
        const apiKey = 'foobar';

        const mock = new MockAdapter(axios);
        mock.onGet("", {params: {q: location, appid: apiKey}})
            .reply(200, {name: location});

        const weatherApiCors = new WeatherApi(false, apiKey);
        weatherApiCors.client = axios;

        const resultPromise = weatherApiCors.loadWeatherByLocation(location);
        resultPromise.then(response => {
            expect(response.data.name).toEqual(location);
        }).catch(e => console.error(e));
    });
});
