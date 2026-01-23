import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { UsersRequestsService } from './users-requests.service';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private usersRequestsService: UsersRequestsService) {}

  getUsers(): Observable<any[]> {
    return this.usersRequestsService.getUsers().pipe(
      map(users =>
        users.map(user => ({
          name: user.name,
          email: user.email,
          phone: user.phone,
          city: user.address.city,
          street: user.address.street,
        }))
      )
    );
  }
}
