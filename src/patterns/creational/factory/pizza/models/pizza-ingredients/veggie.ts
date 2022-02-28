export abstract class Veggie {
	abstract title: string;
}

export class Garlic extends Veggie {
	title = 'Garlic';
}

export class Onion extends Veggie {
	title = 'Onion';
}

export class Mushroom extends Veggie {
	title = 'Mushroom';
}

export class RedPepper extends Veggie {
	title = 'RedPepper';
}
