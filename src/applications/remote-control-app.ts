import { StartScript } from '../models/start-script';
import { CellingFan } from '../patterns/command/api/celling-fan';
import { Light } from '../patterns/command/api/light';
import { ICommand } from '../patterns/command/command';
import { CellingFanCommand } from '../patterns/command/commands/celling-fan-command';
import { CellingFanHighOnCommand } from '../patterns/command/commands/celling-fan-high-on-command';
import { CellingFanLowOnCommand } from '../patterns/command/commands/celling-fan-low-on-command';
import { CellingFanMediumOnCommand } from '../patterns/command/commands/celling-fan-medium-on-command';
import { CellingFanOffCommand } from '../patterns/command/commands/celling-fan-off-command';
import { LightOffCommand } from '../patterns/command/commands/light-off-command';
import { LightOnCommand } from '../patterns/command/commands/light-on-command';
import { RemoteControl } from '../patterns/command/remote-control';

export class RemoteControlApp extends StartScript {
	main(otherArgs?: string[] | undefined): void {
		const remoteControl: RemoteControl = new RemoteControl();

		const lightApi: Light = new Light();
		const lightOnCommand: ICommand = new LightOnCommand(lightApi);
		const lightOffCommand: ICommand = new LightOffCommand(lightApi);
		remoteControl.setCommand(0, lightOnCommand, lightOffCommand);

		const cellingFanApi = new CellingFan('room');
		const cellingFanHighOnCommand: ICommand = new CellingFanHighOnCommand(
			cellingFanApi
		);
		const cellingFanMediumOnCommand: ICommand = new CellingFanMediumOnCommand(
			cellingFanApi
		);
		const cellingFanLowOnnCommand: ICommand = new CellingFanLowOnCommand(
			cellingFanApi
		);
		const cellingFanOffCommand: ICommand = new CellingFanOffCommand(cellingFanApi);

		remoteControl.setCommand(1, cellingFanHighOnCommand, cellingFanOffCommand);
		remoteControl.setCommand(2, cellingFanMediumOnCommand, cellingFanOffCommand);
		remoteControl.setCommand(3, cellingFanLowOnnCommand, cellingFanOffCommand);

		remoteControl.onButtonWasPushed(0);
		remoteControl.offButtonWasPushed(0);
		remoteControl.undoCommandWasPushed();

		remoteControl.onButtonWasPushed(1);
		remoteControl.onButtonWasPushed(3);
		remoteControl.undoCommandWasPushed();
		console.log(remoteControl);
	}
}
