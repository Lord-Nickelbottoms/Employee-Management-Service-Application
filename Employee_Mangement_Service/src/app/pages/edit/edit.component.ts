import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/employee';
import { EmployeeServiceService } from 'src/app/services/employee-service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  employee: any;
  editEmployeeForm!: FormGroup;

  constructor(private employeeService: EmployeeServiceService, private router:Router, private fb: FormBuilder) {}
 

  ngOnInit(): void {
    this.editEmployeeForm = this.fb.group({
      firstname: [localStorage.getItem('firstName'), Validators.required],
      surname: [localStorage.getItem('surname'), Validators.required],
      email: [localStorage.getItem('email'), Validators.required],
      address: [localStorage.getItem('address'), Validators.required],
      department: [localStorage.getItem('department'), Validators.required]
    })
    console.log(this.editEmployeeForm.value)
  }


  async  onSubmit(){
    
      this.employeeService.EditEmployee(this.editEmployeeForm.value, localStorage.getItem('id')).subscribe(res =>{
        console.log(res);
        // this.router.navigate(["/pages/view-all-emp"]);
      })
  
}
 






  // ngOnInit(): void {
  //   this.editEmployeeForm = this.fb.group({
  //     employee_number:['',Validators.required],
  //     firstname: ['', Validators.required],
  //     surname: ['', Validators.required],
  //     email: ['', Validators.required],
  //     address: ['', Validators.required],
  //     department: ['', Validators.required]
  //   })
    
  // }

  // private getEmployeesById(id:number){
  //   this.employeeService.getEmployeeList().subscribe(data=> {
  //     this.employee = data;
  //     console.log(data)
  //   });
  // }

  // onSubmit()
  // {
  //    this.employeeService.EditEmployee(this.employee).subscribe(()=>this.router.navigate(['/employees']));

  // }

  // editEmployee(value: any){
  //   let body = {
  //     firstname: value.firstname,
  //     surname: value.surname,
  //     email: value.email,
  //     address: value.address,
  //     department: value.department
  //   }

  //   this.employeeService.editEmployee(body, '').subscribe(response =>{
  //     console.log(response)
  //   })
  // }

}
