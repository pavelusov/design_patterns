import {
	Cheese,
	Clam,
	Dough,
	FreshClam,
	Garlic,
	Mushroom,
	Onion,
	Pepperoni,
	RedPepper,
	ReggianoCheese,
	SalsaSauce,
	Sauce,
	SlicedPepperoni,
	ThinDough,
	Veggie,
} from '../pizza-ingredients';
import { IPizzaIngredientFactory } from '../pizza-ingredients/IPizzaIngredientFactory';

export class EkbIngredientsFactory implements IPizzaIngredientFactory {
	createCheese(): Cheese {
		return new ReggianoCheese();
	}

	createClam(): Clam {
		return new FreshClam();
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
		return [new Garlic(), new Onion(), new RedPepper(), new Mushroom()];
	}
}
