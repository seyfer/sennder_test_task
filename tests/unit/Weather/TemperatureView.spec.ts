import TemperatureView from "@/components/Weather/TemperatureView.vue";
import {TemperatureUnit} from "@/components/Weather/constants";
import {render} from '@vue/server-test-utils';

describe("TemperatureView", () => {
    it("renders", async () => {
        const unitToViewMap = {
            [TemperatureUnit.CELSIUS]: '7.17°C',
            [TemperatureUnit.KELVIN]: '280.32K',
            [TemperatureUnit.FAHRENHEIT]: '44.91°F',
        };

        for (const [unit, view] of Object.entries(unitToViewMap)) {
            const wrapper = await render(TemperatureView, {
                propsData: {
                    temperatureUnit: unit,
                    temperature: 280.32,
                },
            });

            expect(wrapper.text()).toEqual(view);
        }
    });
});
