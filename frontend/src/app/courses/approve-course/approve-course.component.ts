import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-approve-course',
  templateUrl: './approve-course.component.html'
})
export class ApproveCourseComponent implements OnInit {
  pendingCourses: any[] = [];

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.courseService.getApprovedCourses().subscribe((courses: any) => {
      this.pendingCourses = courses.filter((course: any) => course.status === 'Pending');
    });
  }

  approveCourse(courseId: number) {
    this.courseService.approveCourse(courseId).subscribe(() => {
      alert('Course approved successfully');
      this.ngOnInit();
    });
  }
}