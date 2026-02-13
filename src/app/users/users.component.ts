import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { UsersService } from '../services/UsersService/users.service';
import { IUser } from '../interfaces/IUser';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'], // теперь scss
})
export class UsersComponent implements OnInit, OnDestroy {
  users: IUser[] = [];
  private usersSub?: Subscription; // подписка

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    // сохраняем подписку в переменную
    this.usersSub = this.usersService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  ngOnDestroy(): void {
    // отписываемся
    this.usersSub?.unsubscribe();
  }

  trackByFn(index: number, user: IUser): number {
    return index; // используем trackBy для *ngFor
  }
}
