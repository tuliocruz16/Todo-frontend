import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { ITask } from '../../interfaces/ITask';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from '../task-item/task-item.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormTaskComponent } from '../form-task/form-task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    CommonModule,
    TaskItemComponent,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    FormTaskComponent,
  ],
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: ITask[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getTasks().subscribe((response) => {
      this.tasks = response;
    });
  }

  onDelete(task: ITask): void {
    this.todoService.deleteTask(task).subscribe(() => {
      this.tasks = this.tasks.filter((t) => t.id !== task.id);
    });
  }

  onAddTask(task: ITask): void {
    this.todoService.addTask(task).subscribe((newTask) => {
      this.tasks.push(newTask);
    });
  }

  onUpdateTask(updatedTask: ITask): void {
    this.todoService.updateTask(updatedTask).subscribe(() => {
      const index = this.tasks.findIndex((t) => t.id === updatedTask.id);
      if (index !== -1) {
        this.tasks[index] = updatedTask;
      }
    });
  }
}
