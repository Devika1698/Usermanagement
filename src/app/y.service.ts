import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from './model/task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YService {

  serviceURL : string ;

  constructor(private http:HttpClient) { 

    this.serviceURL = "http://localhost:3000/users"
  }

 
  addTask(task : Task) : Observable<Task> {
    return this.http.post<Task>(this.serviceURL,task);
  }


  getUsers():Observable<Task>{
    return this.http.get<Task>(this.serviceURL)
  }


  deleteUser(id:any):Observable<Task>{
    return this.http.delete<any>(this.serviceURL+'/'+id)

  }
  

  getUserById(id:any):Observable<Task>{
    return this.http.get<any>(this.serviceURL+'/'+id)

  }
  

  updateUser(task:Task):Observable<Task>{
    return this.http.patch<Task>(this.serviceURL+'/'+task.id,task)

  }

}