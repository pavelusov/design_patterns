export abstract class Clam {
	abstract title: string;
}

export class FreshClam extends Clam {
	title = 'FreshClam';
}

export class FrozenClam extends Clam {
	title = 'FrozenClam';
}
