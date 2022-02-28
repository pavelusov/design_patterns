export abstract class StartScript {
	private otherArgs: string[] | undefined;

	abstract main(otherArgs?: string[] | undefined): void;

	constructor(otherArgs?: string[] | undefined) {
		this.otherArgs = otherArgs;
	}

	run() {
		this.main();
	}
}
