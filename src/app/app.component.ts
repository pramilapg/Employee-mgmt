import { Component, OnInit } from '@angular/core';
import { Employee } from './model/employee';
import { EmployeeService } from './services/employee.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  employees:Employee[] = [];
  byn:any;
  employeedetails:Employee={
    img:"",
    id: 1,
    name: "",
    username: "",
    email:"",
    address: {
      street: "",
      suite:"",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: ""
      }
    },
    phone: "",
    website: "",
    company: {
      name:"",
      catchPhrase: "",
      bs: ""
    }
  };
 
  constructor(private http:HttpClient, private employeeService: EmployeeService){

    this.employeeService.getEmployees().subscribe((list) => {
      this.employees=list;
    });
  }
  displayinfo(idx:number):any{
    
    this.employeeService.getEmployeesByID(idx).subscribe((result) => {
      this.employeedetails=result;
    })
  }
  deleteinfo(i:number):any{
   this.employeeService.deleteEmployeesByID(i).subscribe((res) => {
     this.employeedetails=res;
   })
  }
  addmember():any{
    
  }
}
