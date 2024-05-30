import { Injectable } from '@angular/core';

import { TodoItem } from '../interface/todo-item';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todoList: TodoItem[] = [];

  constructor() {}

  getTodoList(): TodoItem[] {
    return this.todoList;
  }

  addTodoItem(task: string): void {
    const newItem = new TodoItem(this.todoList.length + 1, task, false);
    this.todoList.push(newItem);
  }

  deleteTodoItem(id: number): void {
    this.todoList = this.todoList.filter((item) => item.id !== id);
  }

  toggleTodoItem(id: number): void {
    const todoItem = this.todoList.find((item) => item.id === id);
    if (todoItem) {
      todoItem.completed = !todoItem.completed;
    }
  }
}