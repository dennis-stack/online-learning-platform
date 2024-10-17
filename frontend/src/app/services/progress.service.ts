import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProgressService {
  private baseUrl = 'http://localhost/api/progress.php';

  constructor(private http: HttpClient) {}

  trackProgress(studentId: number, courseId: number, completedPercentage: number) {
    const data = { studentId, courseId, completedPercentage };
    return this.http.post(`${this.baseUrl}/track`, data);
  }

  getProgress(studentId: number, courseId: number) {
    return this.http.get(`${this.baseUrl}/get/${studentId}/${courseId}`);
  }
}