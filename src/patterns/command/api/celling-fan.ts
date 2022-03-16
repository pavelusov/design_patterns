export class CellingFan {
	static readonly HIGH = 3;
	static readonly MEDIUM = 2;
	static readonly LOW = 1;
	static readonly OFF = 0;

	private location: string;
	private speed: number;

	constructor(location: string) {
		this.location = location;
		this.speed = CellingFan.OFF;
	}

	high() {
		console.log('A fan command: HIGH');
		this.speed = CellingFan.HIGH;
	}

	medium() {
		console.log('A fan command: MEDIUM');
		this.speed = CellingFan.MEDIUM;
	}

	low() {
		console.log('A fan command: LOW');
		this.speed = CellingFan.LOW;
	}

	off() {
		console.log('A fan command: OFF');
		this.speed = CellingFan.OFF;
	}

	getSpeed(): number {
		return this.speed;
	}
}
