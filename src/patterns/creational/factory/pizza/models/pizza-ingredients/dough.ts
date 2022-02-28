export abstract class Dough {
	abstract title: string;
}

export class ThinDough extends Dough {
	title = 'ThinDough';
}
