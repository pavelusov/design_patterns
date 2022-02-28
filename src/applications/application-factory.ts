import { StartScript } from '../models/start-script';
import { CoffeeMachineApp } from './coffee-machine-app';
import { EmployeeApp } from './employee-app';
import { HelloWorldApp } from './hello-world-app';
import { PizzaApp } from './pizza-app';
import { WeatherStation } from './weather-station-app';

export class ApplicationFactory {
	static createApp(processArgv: string[]) {
		const [pathLauncher, pathScript, appName, ...otherArgs] = processArgv;
		let application: StartScript;

		switch (appName) {
			case 'coffee':
			case 'coffe':
			case 'cofee':
				application = new CoffeeMachineApp(otherArgs);
				break;

			case 'employee':
				application = new EmployeeApp(otherArgs);
				break;

			case 'pizza':
				application = new PizzaApp(otherArgs);
				break;

			// case 'station':
			// case 'weather':
			// 	application = new WeatherStation();
			// 	break;

			default:
				application = new HelloWorldApp(otherArgs);
		}

		application.run();
	}
}
