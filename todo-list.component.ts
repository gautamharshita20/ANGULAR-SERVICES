import { Component, OnInit } from '@angular/core';
import { TodoserviceService } from '../todoservice.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  public employees:any=[]
  constructor(private emp1:TodoserviceService) { }

  ngOnInit(): void {
    this.employees=this.emp1.getEmployee()
  }

}
