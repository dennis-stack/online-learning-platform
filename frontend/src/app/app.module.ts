import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { CreateCourseComponent } from './courses/create-course/create-course.component';
import { ApproveCourseComponent } from './courses/approve-course/approve-course.component';
import { UploadMaterialComponent } from './upload-material/upload-material.component';
import { TrackProgressComponent } from './track-progress/track-progress.component';

import { UserService } from './services/user.service';
import { CourseService } from './courses/course.service';
import { MaterialService } from './services/material.service';
import { ProgressService } from './services/progress.service';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'update-profile', component: UpdateProfileComponent },
  { path: 'create-course', component: CreateCourseComponent },
  { path: 'approve-course', component: ApproveCourseComponent },
  { path: 'upload-material', component: UploadMaterialComponent },
  { path: 'track-progress', component: TrackProgressComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, 
];

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    UpdateProfileComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes), 
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService, CourseService, MaterialService, ProgressService]
})
export class AppModule { }