import { StartScript } from '../models/start-script';
import { CurrentConditionsDisplay } from '../patterns/observer/models/current-conditions-display';
import { WeatherData } from '../patterns/observer/models/weather-data';

export class WeatherStation extends StartScript {
	main(): void {
		const weatherData = new WeatherData();
		const conditionsDisplay = new CurrentConditionsDisplay(weatherData);

		weatherData.setMeasurements(35, 50, 20);
		weatherData.setMeasurements(33, 57, 18);
		weatherData.setMeasurements(29, 49, 15);
	}
}
