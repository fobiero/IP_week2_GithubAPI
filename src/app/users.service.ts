import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsersService {
username = "";
// value from url 
  constructor(private http:HttpClient) { }

  getUsername(username:string) {
    this.username = username;
  }

  getUser() {
    const url = 'https://api.github.com/users/';
    return this.http.get(url + this.username);
  }

  getMyUsername() {
    const url = 'https://api.github.com/users/fobiero';
    return this.http.get(url);
  }
  
  getMyGit_repo() {
    const url = 'https://api.github.com/users/fobiero/repos';
    return this.http.get(url);
  }
 
}
