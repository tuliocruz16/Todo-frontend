import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonComponent } from '../button/button.component';
import { TasksComponent } from '../tasks/tasks.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonComponent, TasksComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private router: Router) {}

  title: string = 'Lista de Tarefas';

  goToAddTask(): void {
    this.router.navigate(['/add-task']);
  }
}
