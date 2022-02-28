import { StartScript } from '../models/start-script';

export class HelloWorldApp extends StartScript {
	main(): void {
		console.log('Hello World!');
	}
}
