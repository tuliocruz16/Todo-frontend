import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ITask } from '../../interfaces/ITask';
import { ButtonComponent } from '../button/button.component';
import { CommonModule } from '@angular/common';

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
  description: string = ''; // Nova propriedade para a descrição
  isDone: boolean = false;
  showForm: boolean = false;

  onSubmit() {
    const newTask: ITask = {
      title: this.task, // Nome da tarefa
      description: this.description, // Descrição da tarefa
      isDone: false,
    };
    this.onAddTask.emit(newTask);

    // Resetar os campos após salvar
    this.task = '';
    this.description = ''; // Limpar o campo da descrição
    this.isDone = false;
  }

  toggleView(valor: boolean) {
    this.showForm = valor;
  }
}
