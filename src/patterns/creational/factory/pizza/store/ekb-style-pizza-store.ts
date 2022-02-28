import { EkbIngredientsFactory } from '../models/ingredients-factory/ekb-ingredients-factory';
import { CheesePizza, ClamPizza, PeperoniPizza, Pizza } from '../models/pizza';
import { PizzaStore, PizzaType } from './pizza-store';

export class EkbStylePizzaStore extends PizzaStore {
	createPizza(type: PizzaType): Pizza {
		let pizza: Pizza;

		const ingredientFactory = new EkbIngredientsFactory();

		if (type === 'cheese') {
			pizza = new CheesePizza(ingredientFactory);
			pizza.name = 'EkbStyleCheesePizza';
		}

		if (type === 'pepperoni') {
			pizza = new PeperoniPizza(ingredientFactory);
			pizza.name = 'EkbStylePeperoniPizza';
		}

		pizza = new ClamPizza(ingredientFactory);
		pizza.name = 'EkbStyleClamPizza';

		return pizza;
	}
}
