import { Cheese, Clam, Dough, Pepperoni, Sauce, Veggie } from './index';

export interface IPizzaIngredientFactory {
	createDough(): Dough;
	createSauce(): Sauce;
	createCheese(): Cheese;
	createVeggie(): Veggie[];
	createPepperoni(): Pepperoni;
	createClam(): Clam;
}
