import { StartScript } from '../models/start-script';
import { Beverage } from '../patterns/decorator/coffee-machine/beverage/beverage';
import { Espresso } from '../patterns/decorator/coffee-machine/beverage/espresso';
import { Mocha } from '../patterns/decorator/coffee-machine/condiment/mocha';

export class CoffeeMachineApp extends StartScript {
	main(): void {
		let espresso: Beverage = new Espresso();
		espresso.getInfo();

		espresso = new Mocha(espresso);
		espresso.getInfo();
	}
}
