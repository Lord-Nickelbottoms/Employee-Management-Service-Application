// import { EmployeeServiceService } from './../../../services/employee-service.service';
// import { any } from '0g';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Employee } from 'src/app/employee';
import { EmployeeServiceService } from 'src/app/services/employee-service.service';

@Component({
  selector: 'app-view-all-emp',
  templateUrl: './view-all-emp.component.html',
  styleUrls: ['./view-all-emp.component.css']
})
export class ViewAllEmpComponent implements OnInit{

  employees: any;
  EmployeeServiceService: any;
  private deleteId :number | undefined;

  constructor(private employeeService: EmployeeServiceService, private router: Router){}

  ngOnInit(): void {
      this.getEmployees();
  }

  private getEmployees(){
    this.employeeService.getEmployeeList().subscribe(data=> {
      this.employees = data;
      console.log(data)
    });
  }

  openDelete(employee : Employee){
    this.deleteId=employee.employeeNumber;
    this.EmployeeServiceService.open(employee , Employee, {
      backdrop: 'static'
    });

    clickMethod()

      this.EmployeeServiceService.delete(this.deleteId).subscribe(()=> {
        this.ngOnInit();
        this.EmployeeServiceService.close();
      });
    }
    }


    //employee: Employee, backdrop: any, arg2: string, size: any, arg4: string): void
  // onDelete(identityNumber: number) {
  //   this.employeeService.deleteEmployee(identityNumber).subscribe(() => {
  //     // Handle success here
  //   }, error => {
  //     // Handle error here
  //   });
  // }


  // employeeDetails(id: number){
  //   this.router.navigate(['view-single-emp', id]);
  // }

  // updateEmployee(id: number){
  //   this.router.navigate(['update-employee', id]);
  // }

  // deleteEmployee(id: number){
  //   this.employeeService.deleteEmployee(id).subscribe( data => {
  //     console.log(data);
  //     this.getEmployees();
  //   })
  // }

function clickMethod() {
  throw new Error('Function not implemented.');
}

