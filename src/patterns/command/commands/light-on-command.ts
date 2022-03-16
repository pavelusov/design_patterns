import { Light } from '../api/light';
import { ICommand } from '../command';

export class LightOnCommand implements ICommand {
	light: Light;

	constructor(light: Light) {
		this.light = light;
	}

	execute(): void {
		this.light.on();
	}

	undo(): void {
		this.light.off();
	}
}
