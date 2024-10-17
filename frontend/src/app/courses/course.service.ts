import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private baseUrl = 'http://localhost/api/course.php';

  constructor(private http: HttpClient) {}

  getApprovedCourses() {
    return this.http.get(`${this.baseUrl}`);
  }

  createCourse(data: any) {
    return this.http.post(`${this.baseUrl}/create`, data);
  }

  updateCourse(courseId: number, data: any) {
    return this.http.put(`${this.baseUrl}/update/${courseId}`, data);
  }

  deleteCourse(courseId: number) {
    return this.http.delete(`${this.baseUrl}/delete/${courseId}`);
  }

  approveCourse(courseId: number) {
    return this.http.post(`${this.baseUrl}/approve/${courseId}`, {});
  }

  enrollInCourse(courseId: number) {
    return this.http.post(`${this.baseUrl}/enroll/${courseId}`, {});
  }

  getEnrolledCourses(studentId: number) {
    return this.http.get(`${this.baseUrl}/enrolled/${studentId}`);
  }
}