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

// Task 3: Create a Manager Class that Inherits from Employee

class Manager extends Employee {
    constructor (name, salary, position, department, bonus) {
        super (name, salary, position, department); // Call parent constructor
        this.bonus = bonus;
    }
    // Override getDetails method to include bonus
    getDetails() {
        return `${this.name}, ${this.position}, Salary: $${this.salary}, Bonus: $${this.bonus}`;
    }
}