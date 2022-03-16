import { ICommand } from '../command';

export class NoCommand implements ICommand {
	execute(): void {
		console.log('No Command');
	}

	undo(): void {
		console.log('No Undo Command');
	}
}
