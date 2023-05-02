import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
`import { Employee } from '../employee';`

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  private url = 'https://a05e-154-0-10-27.in.ngrok.io/';

  constructor(private httpClient: HttpClient) {}

  getEmployeeList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.url}`);  //returns all employees
  }

  createEmployee(employee: Employee): Observable<Object>{
    return this.httpClient.post(`${this.url}`, employee); //creates a new employee
  }

  getEmployeeById(id: number): Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.url}/${id}`); //returns a single employee
  }

  updateEmployee(id: number, employee: Employee): Observable<Object>{
    return this.httpClient.put(`${this.url}/${id}`, employee);
  }

  deleteEmployee(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.url}/${id}`);
  }
}
