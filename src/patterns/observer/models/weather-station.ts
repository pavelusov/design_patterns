import { WeatherData } from "./weather-data";
import { CurrentConditionsDisplay } from "./current-conditions-display";

export class WeatherStation {
    static main() {
        const weatherData = new WeatherData();
        const conditionsDisplay = new CurrentConditionsDisplay(weatherData);

        weatherData.setMeasurements(35, 50, 20);
        weatherData.setMeasurements(33, 57, 18);
        weatherData.setMeasurements(29, 49, 15);

    }
}
