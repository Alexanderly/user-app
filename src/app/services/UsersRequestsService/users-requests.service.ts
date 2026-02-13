import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../../interfaces/IUser';

@Injectable({
  providedIn: 'root'
})
export class UsersRequestsService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  
}
