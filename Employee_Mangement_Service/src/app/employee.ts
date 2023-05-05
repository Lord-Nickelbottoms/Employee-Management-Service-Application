export class Employee {
    employee_number: number;
    firstName: string;
    surname: string;
    email: string;
    department: string;
  toLowerCase: any;

    constructor(employee_number : number, firstName: string, lastName: string, email: string, department: string){
        this.employee_number= employee_number;
        this.firstName = firstName;
        this.surname = lastName;
        this.email = email;
        this.department = department;
    }

    
}