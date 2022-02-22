import { Attendant, Cook, Employee, Manager, Mechanic } from "./models/employee";

const employees: Employee[] = [
    new Manager('Vera', 50000),
    new Cook('Pavel', 60000),
    new Mechanic('Ivan', 10000),
    new Attendant('Denis', 250000),
    new Mechanic('Anton', 150000),
    new Attendant('Tina', 30000),
];

console.log('employees', employees)