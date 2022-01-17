import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }
  getUser() {
    const url = 'https://api.github.com/users';
    return this.http.get(url);
  }
}
