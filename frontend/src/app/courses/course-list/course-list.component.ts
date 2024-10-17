import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  approvedCourses: any[] = [];
  pendingCourses: any[] = [];
  role: string | null = '';

  constructor(private courseService: CourseService, private authService: AuthService) { }

  ngOnInit(): void {

    this.courseService.getApprovedCourses().subscribe((courses: any) => {
      this.approvedCourses = courses.filter((course: any) => course.status === 'Approved');
      this.pendingCourses = courses.filter((course: any) => course.status === 'Pending');
    });


    this.role = this.authService.getRole();
  }

  enroll(courseId: string) {
    this.courseService.enrollInCourse(parseInt(courseId, 10)).subscribe(() => {
      alert('Enrolled successfully');
    });
  }

  approve(courseId: string) {
    this.courseService.approveCourse(parseInt(courseId, 10)).subscribe(() => {
      alert('Course approved successfully');
      this.ngOnInit();
    });
  }

  deleteCourse(courseId: string) {
    if (confirm('Are you sure you want to delete this course?')) {
      this.courseService.deleteCourse(parseInt(courseId, 10)).subscribe(() => {
        alert('Course deleted successfully');
        this.ngOnInit();
      });
    }
  }
}