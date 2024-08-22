import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { TasksComponent } from './componentes/tasks/tasks.component';
import { FormTaskComponent } from './componentes/form-task/form-task.component';

export const routes: Routes = [
  {path: 'home', component: TasksComponent},
  {path: 'form/component', component: FormTaskComponent}
];
