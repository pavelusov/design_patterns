import {
	Cheese,
	Clam,
	Dough,
	FrozenClam,
	Garlic,
	Onion,
	ParmesanCheese,
	Pepperoni,
	RedPepper,
	SalsaSauce,
	Sauce,
	SlicedPepperoni,
	ThinDough,
	Veggie,
} from '../pizza-ingredients';
import { IPizzaIngredientFactory } from '../pizza-ingredients/IPizzaIngredientFactory';

export class MoscowIngredientsFactory implements IPizzaIngredientFactory {
	createCheese(): Cheese {
		return new ParmesanCheese();
	}

	createClam(): Clam {
		return new FrozenClam();
	}

	createDough(): Dough {
		return new ThinDough();
	}

	createPepperoni(): Pepperoni {
		return new SlicedPepperoni();
	}

	createSauce(): Sauce {
		return new SalsaSauce();
	}

	createVeggie(): Veggie[] {
		return [new Garlic(), new Onion(), new RedPepper()];
	}
}
