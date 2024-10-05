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

// Task 2: Create a Department Class

class Department {
    constructor (name) {
        this.name = name;
        this.employees = [];
    }

    // Method to add an employee
    addEmployee(employee) {
        this.employees.push(employee); // Add employee to the department's employee array
    }

    // Method to calculate total salary for the department
    getDepartmentSalary() {
        return this.employees.reduce((total,emp) => total + emp.salary, 0); // Sum salaries of all employees
    }

    // Task 4: Handle Bonuses for Managers

    calculateTotalSalaryWithBonus() {
        return this.employees.reduce((total,emp) => {
            if (emp instanceof Manager) {
                return total + emp.salary + emp.bonus; // Add both salary and bonus for managers
            }
            return total + emp.salary; // For employees, add just the salary
        }, 0);
    }
}

// Task 5: Create and Manage Departments and Employees

// Create departments
const sales = new Department("Sales");
const marketing = new Department("Marketing");

// Create employees
const jack = new Employee("Jack", 35000, "Sales Rep", "Sales");
const jill = new Employee("Jill", 50000, "Marketing Specialist", "Marketing");
const witch = new Manager("Witch", 75000, "Sales Manager", "Sales", 10000);
const hill = new Manager("Hill", 85000, "Marketing Manager", "Marketing", 5000);

// Add employees to departments
sales.addEmployee(jack);
sales.addEmployee(witch);
marketing.addEmployee(jill);
marketing.addEmployee(hill);

// Calculate total salary for each department

console.log(`Total salary for Sales: $${sales.getDepartmentSalary()}`);
console.log(`Total salary with bonuses for Sales: $${sales.calculateTotalSalaryWithBonus()}`);
console.log(`Total salary for Marketing: $${marketing.getDepartmentSalary()}`);
console.log(`Total salary with bonuses for Marketing: $${marketing.calculateTotalSalaryWithBonus()}`);