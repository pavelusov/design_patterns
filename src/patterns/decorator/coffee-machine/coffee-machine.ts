import { Beverage } from "./beverage/beverage";
import { Espresso } from "./beverage/espresso";
import { Mocha } from "./condiment/mocha";

export class CoffeeMachine {
    static main() {
        let espresso: Beverage = new Espresso();
        espresso.getInfo();

        espresso = new Mocha(espresso);
        espresso.getInfo();
    }
}