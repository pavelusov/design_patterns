import { WeatherData } from './weather-data'

export class CurrentConditionsDisplay implements Observer, DisplayElement {
    private temperature: number

    private humidity: number

    private weatherData: WeatherData

    constructor(weatherData: WeatherData) {
        this.weatherData = weatherData
        this.weatherData.registerObserver(this)
        this.humidity = 0
        this.temperature = 0
    }

    display(): void {
        console.info(
            `CurrentConditionsDisplay: temperature=${this.temperature} - humidity=${this.humidity}%`
        )
    }

    update(temp: number, humidity: number, pressure: number): void {
        this.temperature = temp
        this.humidity = humidity
        this.display()
    }
}
