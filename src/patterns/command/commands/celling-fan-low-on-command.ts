import { CellingFanCommand } from './celling-fan-command';

export class CellingFanLowOnCommand extends CellingFanCommand {
	execute(): void {
		super.execute();
		this.cellingFan.low();
	}
}
