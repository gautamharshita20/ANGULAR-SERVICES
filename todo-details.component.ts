import { Component, OnInit } from '@angular/core';
import { TodoserviceService } from '../todoservice.service';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {
  public employees:any=[]

  constructor(private emp:TodoserviceService) { }

  ngOnInit(): void {
    this.employees=this.emp.getEmployee()
  }

}
