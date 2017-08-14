import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  users: string[];

  constructor(private usersSvc: UsersService) {

  }

  ngOnInit() {
    this.users = this.usersSvc.activeUsers;
  }

  onSetToInactive(id: number) {
    this.usersSvc.setToInactive(id);
  }
}
