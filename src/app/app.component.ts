import { Component, Input, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { TaskComponent } from './task/task.component';
import { NgFor, NgIf } from '@angular/common';

import { type Task } from './task/task.model';
import { TaskService } from './task/task.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, TaskComponent, NgIf, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  tasks: Task[];

  private getTask = inject(TaskService);

  constructor() {
    this.tasks = this.getTask.getTask();
  }

  deleteTask() {
    this.tasks = this.getTask.getTask();
  }
}