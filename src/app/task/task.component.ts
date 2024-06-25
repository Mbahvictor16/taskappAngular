import { Component, EventEmitter, Input, Output, inject } from '@angular/core';

import { type Task } from './task.model';
import { TaskService } from './task.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Output() delete = new EventEmitter<void>();
  @Input() newTask!: Task;

  private tasks = inject(TaskService);

  deleteTask() {
    this.tasks.deleteTask(this.newTask.id);
    this.delete.emit();
  }
}
