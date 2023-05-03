import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/employee';
import { EmployeeServiceService } from 'src/app/services/employee-service.service';

@Component({
  selector: 'app-create-insert',
  templateUrl: './create-insert.component.html',
  styleUrls: ['./create-insert.component.css']
})

export class CreateInsertComponent implements OnInit {
  // employee: Employee = new Employee();
  employee: any;
  constructor(private employeeService: EmployeeServiceService,
    private router: Router) { }

  ngOnInit(): void {
    // let firstName : string = <HTMLInputElement>document.getElementById("firstName").value;
    let firstName = document.getElementById('firstName') as HTMLInputElement["value"] | null;
    let surname = document.getElementById('lastName') as HTMLInputElement["value"] | null;
    let email = document.getElementById('emp_email') as HTMLInputElement["value"] | null;
    let address = document.getElementById('address') as HTMLInputElement["value"] | null;
    let department = (<HTMLSelectElement>document.getElementById('department')).value;
  }

  // saveEmployee(){
  //   this.employeeService.createEmployee(this.employee).subscribe( data =>{
  //     console.log(data);
  //     this.goToEmployeeList();
  //   },
  //   error => console.log(error));
  // }

  goToEmployeeList(){
    this.router.navigate(['../view-all-emp/view-all-emp.component.html']);
  }
  
  // onSubmit(){
  //   console.log(this.employee);
  //   this.saveEmployee();
  // }
}
