import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ITask } from '../../interfaces/ITask';
import { ButtonComponent } from '../button/button.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-form-task',
  standalone: true,
  imports: [FormsModule, ButtonComponent, CommonModule],
  templateUrl: './form-task.component.html',
  styleUrls: ['./form-task.component.css'],
})
export class FormTaskComponent {
  @Output('onAddTask') onAddTask = new EventEmitter<ITask>();

  task: string = '';
  description: string = '';
  isDone: boolean = false;

  constructor(private router: Router, private service: TodoService) {}

  onSubmit() {
    const newTask: ITask = {
      title: this.task,
      description: this.description,
      isDone: false,
    };
    this.service.addTask(newTask).subscribe();

    // Resetar os campos após salvar
    this.task = '';
    this.description = '';
    this.isDone = false;

    this.router.navigate(['/']);
  }

  onClose() {
    this.router.navigate(['/']);
  }
}
