import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent {

  title = 'IP-gitHub-API';
  userData:any = []
  myRepo: any;
  myInfo: any;

  constructor(private UsersService:UsersService) {}

// get user input value 
  users:any;

  showUsers() {
    this.UsersService.getUser().subscribe((data) => {
      // console.log(data);
      this.users=data;
    })
  }

  getVal(value: string) {
    this.users = value;
    this.UsersService.getUsername(this.users);
    this.showUsers()
  }

// my info 
  show_myName() {
    this.UsersService.getUser().subscribe((data) => {
      this.myInfo=data;
    })
  }

  show_myRepo() {
    this.UsersService.getUser().subscribe((data) => {
      this.myRepo=data;
    })
  }
}

