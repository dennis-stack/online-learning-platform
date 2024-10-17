import { Component } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html'
})
export class CreateCourseComponent {
  courseName: string = '';
  description: string = '';

  constructor(private courseService: CourseService) {}

  createCourse() {
    const courseData = { name: this.courseName, description: this.description };
    this.courseService.createCourse(courseData).subscribe(() => {
      alert('Course created successfully');
    });
  }
}