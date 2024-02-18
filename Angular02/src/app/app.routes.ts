import {Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {AboutComponent} from "./about/about.component";
import {HomeComponent} from "./home/home.component";

export const routes: Routes = [
  {path: '', component: HomeComponent, title: 'Home page'},
  {path: 'login', component: LoginComponent, title: 'Login'},
  {path: 'about', component: AboutComponent, title: 'About'},
];
