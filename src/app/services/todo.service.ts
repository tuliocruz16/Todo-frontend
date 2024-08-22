import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITask } from '../interfaces/ITask';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private API_URL = 'http://localhost:3000/tasks';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<ITask[]> {
    return this.http.get<ITask[]>(this.API_URL);
  }

  deleteTask(task: ITask): Observable<ITask> {
    return this.http.delete<ITask>(`${this.API_URL}/${task.id}`);
  }

  addTask(task: ITask): Observable<ITask> {
    return this.http.post<ITask>(this.API_URL, task);
  }

  updateTask(task: ITask): Observable<ITask> {
    return this.http.put<ITask>(`${this.API_URL}/${task.id}`, task);
  }
}
