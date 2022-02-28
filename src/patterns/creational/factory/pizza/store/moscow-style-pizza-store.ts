import { MoscowIngredientsFactory } from '../models/ingredients-factory/moscow-ingredients-factory';
import { CheesePizza, ClamPizza, PeperoniPizza, Pizza } from '../models/pizza';
import { PizzaStore, PizzaType } from './pizza-store';

export class MoscowStylePizzaStore extends PizzaStore {
	createPizza(type: PizzaType): Pizza {
		let pizza: Pizza;

		const ingredientFactory = new MoscowIngredientsFactory();

		if (type === 'cheese') {
			pizza = new CheesePizza(ingredientFactory);
			pizza.name = 'MoscowStyleCheesePizza';
		}

		if (type === 'pepperoni') {
			pizza = new PeperoniPizza(ingredientFactory);
			pizza.name = 'MoscowStylePeperoniPizza';
		}

		pizza = new ClamPizza(ingredientFactory);
		pizza.name = 'MoscowStyleClamPizza';

		return pizza;
	}
}
