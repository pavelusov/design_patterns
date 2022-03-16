import { Light } from '../api/light';
import { ICommand } from '../command';

export class LightOffCommand implements ICommand {
	light: Light;

	constructor(light: Light) {
		this.light = light;
	}

	execute(): void {
		this.light.off();
	}

	undo(): void {
		this.light.on();
	}
}
