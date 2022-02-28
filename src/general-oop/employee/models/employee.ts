export abstract class Employee {
  private name: string
  private salary: number
  private jobTitle: string

  protected constructor(name: string, salary: number, jobTitle: string) {
    this.name = name
    this.salary = salary
    this.jobTitle = jobTitle
  }
}

export class Attendant extends Employee {
  constructor(name: string, salary: number) {
    super(name, salary, 'Attendant')
  }
}

export class Cook extends Employee {
  constructor(name: string, salary: number) {
    super(name, salary, 'Cook')
  }
}

export class Mechanic extends Employee {
  constructor(name: string, salary: number) {
    super(name, salary, 'Mechanic')
  }
}

export class Manager extends Employee {
  constructor(name: string, salary: number) {
    super(name, salary, 'Manager')
  }
}
