import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
   newEmployeeForm!: FormGroup;

  constructor(private employeeService: EmployeeServiceService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.newEmployeeForm = this.fb.group({
      firstname: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', Validators.required],
      address: ['', Validators.required],
      department: ['', Validators.required]
    })
  }

 

  goToEmployeeList(){
    this.router.navigate(['/pages/view-all-emp']);
  }
  
  onSubmit(){

    this.employeeService.createEmployee(this.newEmployeeForm.value).subscribe( data =>
      {
        console.log(data);
      alert("New employee has been created.")
      this.goToEmployeeList();
      });

  
  }
}
