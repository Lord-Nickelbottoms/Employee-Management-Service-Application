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

  employeeDetails(id: number){
    this.router.navigate(['view-single-emp', id]);
  }

  // updateEmployee(id: number){
  //   this.router.navigate(['update-employee', id]);
  // }

  // deleteEmployee(id: number){
  //   this.employeeService.deleteEmployee(id).subscribe( data => {
  //     console.log(data);
  //     this.getEmployees();
  //   })
  // }
}
