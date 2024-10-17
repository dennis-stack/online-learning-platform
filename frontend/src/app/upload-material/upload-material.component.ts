import { Component } from '@angular/core';
import { MaterialService } from '../services/material.service';

@Component({
  selector: 'app-upload-material',
  templateUrl: './upload-material.component.html'
})
export class UploadMaterialComponent {
  courseId = 1;
  selectedFile: File | null = null;

  constructor(private materialService: MaterialService) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  uploadMaterial() {
    if (this.selectedFile) {
      this.materialService.uploadMaterial(this.courseId, this.selectedFile).subscribe(() => {
        alert('Material uploaded successfully');
      });
    }
  }
}