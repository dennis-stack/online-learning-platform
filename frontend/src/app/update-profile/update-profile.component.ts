import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html'
})
export class UpdateProfileComponent {
  email = '';
  password = '';
  userId = 1;

  constructor(private userService: UserService) {}

  updateProfile() {
    const profileData = { email: this.email, password: this.password };
    this.userService.updateProfile(this.userId, profileData).subscribe(() => {
      alert('Profile updated successfully');
    });
  }
}