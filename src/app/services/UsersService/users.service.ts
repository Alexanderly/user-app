import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { UsersRequestsService } from '../UsersRequestsService/users-requests.service';
import { IUser } from '../../interfaces/IUser';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private usersRequestsService: UsersRequestsService) {}

  getUsers(): Observable<IUser[]> {
    return this.usersRequestsService.getUsers().pipe(
      map(users =>
        users.map(user => ({
          name: user.name,
          email: user.email,
          phone: user.phone,
          address: {
            city: user.address?.city || '',   // берём из API
            street: user.address?.street || '',
          },
        }))
      )
    );
  }
  
}
