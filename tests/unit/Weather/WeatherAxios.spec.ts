import WeatherAxios from "@/components/Weather/WeatherAxios";
import axios from "axios";

jest.unmock("axios");

describe("WeatherAxios", () => {
    it("constructs properly", () => {
        const weatherApiCors = new WeatherAxios(true);
        expect(WeatherAxios.axios.defaults.baseURL).toContain(weatherApiCors.corsProxy);
        const weatherApi = new WeatherAxios(false);
        expect(WeatherAxios.axios.defaults.baseURL).not.toContain(weatherApi.corsProxy);
        expect(WeatherAxios.axios).toBeInstanceOf(Function);
    });
});
