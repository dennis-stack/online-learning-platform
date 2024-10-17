import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private userService: UserService, private router: Router) {}

  login() {
    const credentials = { email: this.email, password: this.password };
    this.userService.login(credentials).subscribe((response: any) => {
      localStorage.setItem('access_token', response.token);
      this.router.navigate(['/create-course']);
    });
  }
}