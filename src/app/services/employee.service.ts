import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../model/employee';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  EmployeeUrl:string="http://localhost:3000/employeeList";
  constructor(private http:HttpClient) { }

  

  getEmployees():Observable<Employee[]>{
    return this.http.get<Employee[]>(this.EmployeeUrl);
  }
  getEmployeesByID(empID:number):Observable<Employee>{
    const url=`${this.EmployeeUrl}/${empID}`;
    return this.http.get<Employee>(url);
  }
  deleteEmployeesByID(empid:number):Observable<Employee>{
    const url=`${this.EmployeeUrl}/${empid}`;
    return this.http.delete<Employee>(url);
  }
  

}
