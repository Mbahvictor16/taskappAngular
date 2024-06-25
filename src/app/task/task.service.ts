import { Injectable } from '@angular/core';
import { type Task } from './task.model';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private tasks: Task[] = [];

  constructor() {
    const storageTask = localStorage.getItem('tasks');

    if (storageTask) {
      this.tasks = JSON.parse(storageTask);
    }
  }

  getTask() {
    return this.tasks;
  }

  addTask(task: Task) {
    this.tasks.unshift(task);
    this.storeTask();
  }

  deleteTask(taskId: number) {
    this.tasks = this.tasks.filter(({ id }) => id !== taskId);

    this.storeTask();
  }

  storeTask() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
