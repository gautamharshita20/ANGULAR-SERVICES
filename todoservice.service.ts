import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoserviceService {
  public employees=[
    {"name":"Mr ABC","id":123,"dept":"CSE"},
    {"name":"Mr PQR","id":456,"dept":"ECE"},
    {"name":"Mr ABC","id":789,"dept":"CE"}
  ]
getEmployee(){
  return this.employees
}
  constructor() { }
}
