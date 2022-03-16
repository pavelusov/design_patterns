import { CellingFan } from '../api/celling-fan';
import { ICommand } from '../command';

export class CellingFanCommand implements ICommand {
	cellingFan: CellingFan;
	prevSpeed: number;

	constructor(cellingFan: CellingFan) {
		this.cellingFan = cellingFan;
		this.prevSpeed = this.cellingFan.getSpeed();
	}

	execute(): void {
		this.prevSpeed = this.cellingFan.getSpeed();
	}

	undo(): void {
		switch (this.prevSpeed) {
			case CellingFan.HIGH:
				this.cellingFan.high();
				break;

			case CellingFan.MEDIUM:
				this.cellingFan.medium();
				break;

			case CellingFan.LOW:
				this.cellingFan.low();
				break;

			default:
				this.cellingFan.off();
		}
	}
}
