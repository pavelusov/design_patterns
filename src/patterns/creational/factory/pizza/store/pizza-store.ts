import { Pizza } from '../models/pizza';

export type PizzaType = 'cheese' | 'pepperoni';

export abstract class PizzaStore {
	orderPizza(type: PizzaType): Pizza {
		const pizza: Pizza = this.createPizza(type);

		pizza.prepare();
		pizza.bake();
		pizza.cut();
		pizza.box();

		return pizza;
	}

	abstract createPizza(type: PizzaType): Pizza;
}
