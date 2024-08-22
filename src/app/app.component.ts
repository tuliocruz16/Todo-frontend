import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { TasksComponent } from './componentes/tasks/tasks.component';
import { FormTaskComponent } from './componentes/form-task/form-task.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HomeComponent,
    TasksComponent,
    FormTaskComponent,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'TODOListAngular';
}
