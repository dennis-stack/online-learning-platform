import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {
  private baseUrl = 'http://localhost/api/material.php';

  constructor(private http: HttpClient) {}

  uploadMaterial(courseId: number, file: File) {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(`${this.baseUrl}/upload/${courseId}`, formData);
  }

  getCourseMaterials(courseId: number) {
    return this.http.get(`${this.baseUrl}/course/${courseId}`);
  }
}