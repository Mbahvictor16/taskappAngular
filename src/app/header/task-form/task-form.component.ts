import { NgIf } from '@angular/common';
import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { type Task } from '../../task/task.model';
import { TaskService } from '../../task/task.service';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css',
})
export class TaskFormComponent {
  @Output() add = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();
  taskError = false;
  task: Task = {
    id: Date.now(),
    title: '',
    description: '',
  };

  private newTask = inject(TaskService);

  onCancel() {
    this.cancel.emit();
  }

  OnSubmit(): boolean | void {
    if (this.task.description == '' || this.task.title == '') {
      return (this.taskError = true);
    }

    this.add.emit();

    this.newTask.addTask({
      id: Date.now(),
      title: this.task.title,
      description: this.task.description,
    });
  }
}
