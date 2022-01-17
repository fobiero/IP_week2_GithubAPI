import { Component } from '@angular/core';
// import { from } from 'rxjs';
import {UsersService} from './users.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'IP-gitHub-API';
  userData:any = []
  constructor(private user:UsersService) {
    this.user.getUser().subscribe((data) => {
      // console.log(data);
      this.userData=data;
    })
  }

}
