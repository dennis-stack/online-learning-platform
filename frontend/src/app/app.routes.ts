import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { ApproveCourseComponent } from './courses/approve-course/approve-course.component';
import { CreateCourseComponent } from './courses/create-course/create-course.component';
import { CourseListComponent } from './courses/course-list/course-list.component';

export const routes: Routes = [
    { path: 'courses', component: CourseListComponent, canActivate: [AuthGuard] },
    { path: 'create-course', component: CreateCourseComponent, canActivate: [AuthGuard] },
    { path: 'approve-course', component: ApproveCourseComponent, canActivate: [AuthGuard] }
];
