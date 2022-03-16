import { ICommand } from './command';
import { NoCommand } from './commands/no-command';

export class RemoteControl {
	onCommands: ICommand[];
	offCommands: ICommand[];
	undoCommand: ICommand;

	constructor() {
		const noCommand = new NoCommand();
		this.onCommands = Array(7).fill(noCommand);
		this.offCommands = Array(7).fill(noCommand);
		this.undoCommand = noCommand;
	}

	setCommand(slot: number, onCommand: ICommand, offCommand: ICommand): void {
		this.onCommands[slot] = onCommand;
		this.offCommands[slot] = offCommand;
	}

	onButtonWasPushed(slot: number): void {
		const command = this.onCommands[slot];
		this.undoCommand = command;
		command.execute();
	}

	offButtonWasPushed(slot: number): void {
		const command = this.offCommands[slot];
		this.undoCommand = command;
		command.execute();
	}

	undoCommandWasPushed(): void {
		this.undoCommand.undo();
	}
}
