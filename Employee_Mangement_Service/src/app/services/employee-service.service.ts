import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {


  private url = 'http://localhost:8080/employees';

  constructor(private httpClient: HttpClient) {}

  getEmployeeList(){
    return this.httpClient.get('http://localhost:8080/employees')
  }

  getEmployeeById(id: number){
    return this.httpClient.get(`http://localhost:8080/employees/${id}`)
  }

  createEmployee(employee: Employee){
    return this.httpClient.post(`${this.url}`, employee); //creates a new employee
  }

  EditEmployee(employee:Employee){
  return this.httpClient.put<Employee>(`${this.url}/${employee.employeeNumber}`,employee);
  }

  // editEmployee(data: any, id: string): Observable<any>{
  //   return this.httpClient.patch(`${this.url}/${id}`, data);
  // }



  // getEmployeeById(id: number): Observable<Employee>{
  //   return this.httpClient.get<Employee>(`${this.url}/${id}`); //returns a single employee
  // }

  // updateEmployee(id: number, employee: Employee): Observable<Object>{
  //   return this.httpClient.put(`${this.url}/${id}`, employee);
  // }

  // deleteEmployee(id: number): Observable<Object>{
  //   return this.httpClient.delete(`${this.url}/${id}`);
  // }
}
