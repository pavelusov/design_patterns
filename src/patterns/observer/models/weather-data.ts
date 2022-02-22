export class WeatherData implements Subject {
    private readonly observers: Observer[];

    private temperature: number;

    private humidity: number;

    private pressure: number;

    constructor() {
        this.observers = [];
        this.temperature = 0;
        this.humidity = 0;
        this.pressure = 0;
    }

    notifyObservers(): void {
        const { length } = this.observers;
        for (let i = 0; i < length; i++) {
            this.observers[i].update(this.temperature, this.humidity, this.pressure);
        }
    }

    measurementsChanged() {
        this.notifyObservers();
    }
    
    setMeasurements(temp: number, humidity: number, pressure: number) {
        this.temperature = temp;
        this.humidity = humidity;
        this.pressure = pressure;
        this.measurementsChanged();
    }
    
    registerObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    removeObserver(observer: Observer): void {
        const index = this.observers.indexOf(observer);
        if (index >= 0) delete this.observers[index];
    }

}
