import { Component } from '@angular/core';
import { TodoService } from '../../service/todo.service';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent {
  newTask: string = '';

  constructor(private todoService: TodoService) {}

  // Add task function
  addTask(): void {
    if (this.newTask.trim() !== '') {
      this.todoService.addTodoItem(this.newTask);
      this.newTask = '';
    }
  }
}


