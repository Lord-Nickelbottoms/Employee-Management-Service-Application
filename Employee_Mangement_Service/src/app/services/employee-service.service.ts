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

  getEmployeeById(id: any): Observable < any [] >{
    return this.httpClient.get<any>(`${this.url}/${id}`)
  }

  createEmployee(employee: Employee){
    return this.httpClient.post(`${this.url}`, employee); //creates a new employee
  }

  EditEmployee(value:any, id:any){
  // return this.httpClient.put(this.url+ "/{id}" + id, value);
  return this.httpClient.put(`${this.url}/${id}`, value);
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
