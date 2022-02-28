import { Cheese, Dough, Pepperoni, Sauce, Veggie, Clam } from './pizza-ingredients';
import { IPizzaIngredientFactory } from './pizza-ingredients/IPizzaIngredientFactory';

export abstract class Pizza {
	private _name: string | undefined;

	ingredientFactory: IPizzaIngredientFactory;

	dough: Dough | undefined;

	sauce: Sauce | undefined;

	veggie: Veggie[] | undefined;

	cheese: Cheese | undefined;

	pepperoni: Pepperoni | undefined;

	clam: Clam | undefined;

	constructor(ingredientFactory: IPizzaIngredientFactory) {
		this.ingredientFactory = ingredientFactory;
	}

	abstract prepare(): void;

	bake() {
		console.log('bake...');
	}

	cut() {
		console.log('cut...');
	}

	box() {
		console.log('box...');
	}

	get info() {
		return this._name;
	}

	toString() {
		return 'pizza:code:4003';
	}

	set name(value: string) {
		this._name = value;
	}
}

export class CheesePizza extends Pizza {
	prepare(): void {
		console.log('Preparing...', this.info);
		this.dough = this.ingredientFactory.createDough();
		this.sauce = this.ingredientFactory.createSauce();
		this.cheese = this.ingredientFactory.createCheese();
	}
}

export class PeperoniPizza extends Pizza {
	prepare(): void {
		console.log('Preparing...', this.info);
		this.dough = this.ingredientFactory.createDough();
		this.sauce = this.ingredientFactory.createSauce();
		this.pepperoni = this.ingredientFactory.createPepperoni();
		this.veggie = this.ingredientFactory.createVeggie();
		this.cheese = this.ingredientFactory.createCheese();
	}
}

export class ClamPizza extends Pizza {
	prepare(): void {
		console.log('Preparing...', this.info);
		this.dough = this.ingredientFactory.createDough();
		this.sauce = this.ingredientFactory.createSauce();
		this.clam = this.ingredientFactory.createClam();
		this.cheese = this.ingredientFactory.createCheese();
	}
}
