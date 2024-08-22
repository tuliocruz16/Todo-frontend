import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITask } from '../../interfaces/ITask';
import { faTimes, faPencil } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent {
  @Input() task!: ITask;
  @Output() onDeleteTask = new EventEmitter<ITask>();
  @Output() onUpdateTask = new EventEmitter<ITask>();

  faTimes = faTimes;
  faPencil = faPencil;

  isEditing = false;
  editDescription = '';
  editTitle = '';

  onDelete(task: ITask): void {
    this.onDeleteTask.emit(task);
  }

  onEdit(): void {
    this.isEditing = true;
    this.editTitle = this.task.title;
    this.editDescription = this.task.description;
  }

  onTitleChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.editTitle = inputElement.value;
  }

  onDescriptionChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.editDescription = inputElement.value;
  }

  onSaveEdit(): void {
    this.task.title = this.editTitle;
    this.task.description = this.editDescription;
    this.onUpdateTask.emit(this.task);
    this.isEditing = false;
  }

  onCancelEdit(): void {
    this.isEditing = false;
  }

  onToggleStatus(task: ITask): void {
    task.isDone = !task.isDone;
    this.onUpdateTask.emit(task);
  }
}
