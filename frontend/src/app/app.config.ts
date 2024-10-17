import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { UserService } from './services/user.service';
import { CourseService } from './courses/course.service';
import { MaterialService } from './services/material.service';
import { ProgressService } from './services/progress.service';
import { Route } from '@angular/router';

const routes: Route[] = [
  { path: 'register', loadComponent: () => import('./register/register.component').then(c => c.RegisterComponent) },
  { path: 'login', loadComponent: () => import('./login/login.component').then(c => c.LoginComponent) },
  { path: 'update-profile', loadComponent: () => import('./update-profile/update-profile.component').then(c => c.UpdateProfileComponent) },
  { path: 'create-course', loadComponent: () => import('./courses/create-course/create-course.component').then(c => c.CreateCourseComponent) },
  { path: 'approve-course', loadComponent: () => import('./courses/approve-course/approve-course.component').then(c => c.ApproveCourseComponent) },
  { path: 'upload-material', loadComponent: () => import('./upload-material/upload-material.component').then(c => c.UploadMaterialComponent) },
  { path: 'track-progress', loadComponent: () => import('./track-progress/track-progress.component').then(c => c.TrackProgressComponent) },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    UserService,
    CourseService,
    MaterialService,
    ProgressService
  ]
};