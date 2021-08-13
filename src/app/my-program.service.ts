import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyProgramService {

  constructor(private httpClient:HttpClient) { }

  getemployes():Observable<any>{
    return this.httpClient.get("https://reqres.in/api/users?page=2 ")
  }

  getstudents():Observable<any>{
    return this.httpClient.get("https://gorest.co.in/public/v1/users")
  }

  postteachers(value:any):Observable<any>{
    return this.httpClient.post("https://reqres.in/api/users",value)
  }

  postsalary(value:any):Observable<any>{
    return this.httpClient.post("https://dummy.restapiexample.com/create",value)
  }

}
