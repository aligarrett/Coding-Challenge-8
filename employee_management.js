// Task 1: Create an Employee Class

class Employee {
    constructor (name, salary, position, department) {
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
    }
    getDetails() {
        return `${this.name} works as a ${this.position} in the ${this.department} department. Their salary is: ${this.salary}`;
    }
}