import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/employee';
import { EmployeeServiceService } from 'src/app/services/employee-service.service';

@Component({
  selector: 'app-view-single-emp',
  templateUrl: './view-single-emp.component.html',
  styleUrls: ['./view-single-emp.component.css']
})
export class ViewSingleEmpComponent {
  // employee: any;

  // constructor(private employeeService: EmployeeServiceService, private router: Router){}

  clickMethod(name: string) {
    if(confirm("Are you sure to delete this user?")) {
      console.log("Implement delete functionality here");
    }
  }

  // ngOnInit(): void{
  //   this.getEmployeeById();
  // }

  // getEmployeeById(id: number): Observable<Employee>{
  // }
}
