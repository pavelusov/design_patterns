import { ICommand } from './command';

export class SimpleRemoteControl {
	slot: ICommand | undefined;

	setCommand(command: ICommand): void {
		this.slot = command;
	}

	buttonWasPressed(): void {
		this.slot?.execute();
	}
}
