import { Beverage } from '../beverage/beverage'

export abstract class CondimentDecorator extends Beverage {
	abstract getDescription(): string
}
