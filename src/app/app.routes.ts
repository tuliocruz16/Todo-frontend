import { Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { TasksComponent } from './componentes/tasks/tasks.component';
import { FormTaskComponent } from './componentes/form-task/form-task.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'add-task', component: FormTaskComponent },
];
