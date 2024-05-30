import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TasksService {

   amaTasks: string[] = [ "bhbhjbhjhjb"];
  constructor() {  }

  addTask(task: string): void {
    this.amaTasks.push(task);
  }

  getTasks(): string[] {
    return this.amaTasks;

  }
  deleteTask(index: number): void {
    if (index >= 0 && index < this.amaTasks.length) {
      this.amaTasks.splice(index, 1);
    }}
}


