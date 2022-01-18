import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  title = 'IP-gitHub-API';
  userData:any = []
  myRepo: any;
  myInfo: any;

  constructor(private UsersService:UsersService) {}

// get user inout value 
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

