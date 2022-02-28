import { StartScript } from '../models/start-script';
import { Pizza } from '../patterns/creational/factory/pizza/models/pizza';
import { EkbStylePizzaStore } from '../patterns/creational/factory/pizza/store/ekb-style-pizza-store';
import { MoscowStylePizzaStore } from '../patterns/creational/factory/pizza/store/moscow-style-pizza-store';

export class PizzaApp extends StartScript {
	main(): void {
		const moscowPizzaStore = new MoscowStylePizzaStore();
		const ekbPizzaStore = new EkbStylePizzaStore();

		let pizza: Pizza = moscowPizzaStore.orderPizza('cheese');

		// console.log('App info: ', pizza.info);

		pizza = ekbPizzaStore.orderPizza('pepperoni');

		// console.log('App info: ', pizza.info);
	}
}
