import { Component, EventEmitter, Output } from '@angular/core';

import { NgIf } from '@angular/common';
import { TaskFormComponent } from './task-form/task-form.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TaskFormComponent, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isAddingTask = false;

  onAddTask() {
    this.isAddingTask = true;
  }

  cancelAdd() {
    this.isAddingTask = false;
  }

  onSubmitForm() {
    this.isAddingTask = false;
  }
}
