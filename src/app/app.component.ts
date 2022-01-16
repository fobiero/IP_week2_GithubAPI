import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IP-gitHub-API';

  search: any = "";

  getUser(forms:NgForm) {
    if(this.search === '') {
      alert('Fields empy')
    } else {
      alert(this.search)
      forms.reset();
    }
  }
}
