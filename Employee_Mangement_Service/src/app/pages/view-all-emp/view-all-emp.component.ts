// import { EmployeeServiceService } from './../../../services/employee-service.service';
// import { any } from '0g';
import { query } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
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
  filterTerm: any = '';
  employees: any;
  emp:Employee[] = [];
  

  constructor(private employeeService: EmployeeServiceService, private router: Router, private http: HttpClient){}

  ngOnInit(): void {
      this.getEmployees();
      // this.search();
  }

  private getEmployees(){
    this.employeeService.getEmployeeList().subscribe(data=> {
      this.employees = data;
      console.log(data)
    });
  }

 
  setEmployeeDetails(id:any, firstname:string,surname:string,email:string,address:string,department:string)
  {
    localStorage.setItem('id',id)
    localStorage.setItem('firstName', firstname);
    localStorage.setItem('surname',surname);
    localStorage.setItem('email',email);
    localStorage.setItem('address', address);
    localStorage.setItem('department', department)
  }



  filteredEmployees = this.emp;

  filter(){
    this.employeeService.getEmployeeList().subscribe(data=> {
      this.employees = data;
      let array: string[] = [];

      array.filter(item => {
        this.filterTerm = item;
        return array[this.filterTerm]
      })
    })
  }

  // clearFilter() {
  //   this.filterTerm = '';
  //   this.filteredEmployees = this.emp;
  // }
  
  // search()
  // {
  //   this.http.get<Employee[]>("http://localhost:8080/employees").subscribe((data: Employee[]) => {
  //     this.emp=data;

  // }); 

  
// }


searchEmployees()
  {
    
  }
  // employeeDetails(id: number){
  //   this.router.navigate(['view-single-emp', id]);
  // }

  // updateEmployee(id: number){
  //   this.router.navigate(['update-employee', id]);
  // }

  deleteEmployee(id: number){

    if (confirm("Do you want to delete this Employee?") == true) {
      this.employeeService.deleteEmployee(id).subscribe( data => {
        console.log(data);
        this.getEmployees();
      })
    } else {
      console.log("You canceled!");
    }
  }
}
