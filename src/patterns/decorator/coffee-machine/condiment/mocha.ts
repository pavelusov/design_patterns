import { Beverage } from '../beverage/beverage'
import { CondimentDecorator } from './condiment-decorator'

export class Mocha extends CondimentDecorator {
	private beverage: Beverage

	constructor(beverage: Beverage) {
		super()
		this.beverage = beverage
	}

	getDescription(): string {
		const description = this.beverage.getDescription()
		return `${description}, Mocha`
	}

	cost(): number {
		return 30 + this.beverage.cost()
	}
}
