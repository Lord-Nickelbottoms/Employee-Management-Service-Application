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
 
  constructor(private employeeService: EmployeeServiceService, private router:Router, private fb: FormBuilder) {}

  employee: any;
  editEmployeeForm!: FormGroup;
   
  firstname! : String
  surname! : String
  email! : String
  address! : String
  department!: String
 
 
  employee_number = localStorage.getItem("this.employee_number");
  ngOnInit(): void {
    
    this.editEmployeeForm = this.fb.group({
      firstname: [this.firstname, Validators.required],
      surname: [this.surname, Validators.required],
      email: [this.email, Validators.required],
      address: [this.address, Validators.required],
      department: [this.department, Validators.required]
    })

   
  }


  async  onSubmit(){
    
      this.employeeService.EditEmployee((this.editEmployeeForm.value), this.employee_number).subscribe((res:any) =>{
        console.log(res);

        this.firstname = res.firstname ;
        this.surname = res.surname;
        this.email = res.email;
        this.address = res.address;
        this.department = res.department;
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
