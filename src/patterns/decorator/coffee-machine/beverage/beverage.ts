export abstract class Beverage {
    description = "Unknown Beverage";

    getDescription() {
        return this.description;
    }

    getInfo() {
        console.info(`Beverage: ${this.getDescription()}. Cost: ${this.cost()}`);
    }

    abstract cost(): number;
}
