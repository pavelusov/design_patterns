export abstract class Cheese {
	abstract title: string;
}

export class ReggianoCheese extends Cheese {
	title = 'ReggianoCheese';
}

export class ParmesanCheese extends Cheese {
	title = 'ParmesanCheese';
}
