import { CellingFanCommand } from './celling-fan-command';

export class CellingFanMediumOnCommand extends CellingFanCommand {
	execute(): void {
		super.execute();
		this.cellingFan.medium();
	}
}
