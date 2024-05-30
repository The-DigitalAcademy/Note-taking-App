import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../../interface/todo-item';
import { TodoService } from '../../service/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
 todoList: TodoItem[] = [];
  taskService: any;

 
// getting todo list when you open the app
  ngOnInit(): void {
    this.todoList = this.todoService.getTodoList();
  }

  constructor(private todoService: TodoService) {}

  // turning on the isComplete mode on, on a specific note by id, 
  toggleCompletion(id: number): void {
    this.todoService.toggleTodoItem(id);
  }

  // deleting a specific note by their id
    deleteTask(index: number): void {
      if (index >= 0 && index < this.todoList.length) {
        this.todoList.splice(index, 1);

        console.log("")
  }
}
}