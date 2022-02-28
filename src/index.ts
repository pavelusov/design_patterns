import { ApplicationFactory } from './applications/application-factory';

if (process?.argv) {
	ApplicationFactory.createApp(process.argv);
}
