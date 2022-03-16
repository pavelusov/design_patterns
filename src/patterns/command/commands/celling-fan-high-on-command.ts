import { CellingFanCommand } from './celling-fan-command';

export class CellingFanHighOnCommand extends CellingFanCommand {
	execute(): void {
		super.execute();
		this.cellingFan.high();
	}
}
