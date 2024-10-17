import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  email = '';
  password = '';
  role = 'student';

  constructor(private userService: UserService) {}

  register() {
    const userData = { email: this.email, password: this.password, role: this.role };
    this.userService.register(userData).subscribe(() => {
      alert('Registration successful');
    });
  }
}