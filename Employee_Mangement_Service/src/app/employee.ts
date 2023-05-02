export class Employee {
    employeeNumber: number;
    firstName: string;
    surname: string;
    email: string;
    department: string;

    constructor(employeeNumber : number, firstName: string, lastName: string, email: string, department: string){
        this.employeeNumber= employeeNumber;
        this.firstName = firstName;
        this.surname = lastName;
        this.email = email;
        this.department = department;
    }

    
}