import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})

export class ReposComponent {

  title = 'IP-gitHub-API';
  userData:any = []
  myRepo: any;
  myInfo: any;
  getRepo:any;

  constructor(private UsersService:UsersService) {}

// get user input value 
  users:any;

  get_all_repos() {
    this.UsersService.getUser_repo().subscribe((data) => {
      this.getRepo = data;
      console.log(this.getRepo);
      
    })
  }

  showUsers() {
    this.UsersService.getUser().subscribe((data) => {
      // console.log(data);
      this.users=data;
    })
  }

  getVal(value: string) {
    this.users = value;
    this.UsersService.getUsername(this.users);
    // this.showUsers()
    this.get_all_repos()
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

