import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username = '';
  password = '';
  loginFailed = false;

  constructor(private router: Router, private auth: LoginService){}

  onLogin() {
    if (this.auth.login(this.username, this.password)) {
      this.router.navigate(['/']);
    } else {
      this.loginFailed = true;
    }
  }
}
