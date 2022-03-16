import { CellingFanCommand } from './celling-fan-command';

export class CellingFanOffCommand extends CellingFanCommand {
	execute(): void {
		super.execute();
		this.cellingFan.off();
	}
}
