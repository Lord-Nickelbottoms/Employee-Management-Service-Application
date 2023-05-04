import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/employee';
import { EmployeeServiceService } from 'src/app/services/employee-service.service';

@Component({
  selector: 'app-view-single-emp',
  templateUrl: './view-single-emp.component.html',
  styleUrls: ['./view-single-emp.component.css']
})
export class ViewSingleEmpComponent {
  employees: any;
  private url = 'http://localhost:8080/employees';
//employeeDelete: string;

  constructor(private employeeService: EmployeeServiceService, private router: Router, private http: HttpClient){}

  clickMethod(name: string) {
    if(confirm("Are you sure to delete this user?")) {
      console.log("Implement delete functionality here");
    }

  }



  ngOnInit(): void{
    this.getEmployeeById(this.employees);
  }

  getEmployeeById(id: number){ //this is to get one product from the API service
    return this.http.get(`${this.url}/` + id);
  }
}
