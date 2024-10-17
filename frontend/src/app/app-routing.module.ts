import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CourseListComponent } from './courses/course-list/course-list.component';
import { CreateCourseComponent } from './courses/create-course/create-course.component';
import { AuthGuard } from './guards/auth.guard';
import { InstructorGuard } from './guards/instructor.guard';
import { ApproverGuard } from './guards/approver.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'courses', component: CourseListComponent, canActivate: [AuthGuard] },
  { path: 'create-course', component: CreateCourseComponent, canActivate: [InstructorGuard] },
  { path: '', redirectTo: 'courses', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
