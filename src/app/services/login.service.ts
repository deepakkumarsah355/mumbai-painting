import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

   private loggedIn = false;

   constructor(private router: Router) { }

  login(username: string, password: string): boolean {
    if (username === 'admin' && password === '12345') {
      this.loggedIn = true;
      return true;
    }
    return false;
  }

  logout(): void {
    this.loggedIn = false;
    this.router.navigate(['/']);
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }
}
