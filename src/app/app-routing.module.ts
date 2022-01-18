import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ReposComponent} from './component/repos/repos.component'
import {UserComponent} from './component/user/user.component'
// import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'users', component:UserComponent},
  {path: 'repos', component:ReposComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
