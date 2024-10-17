import { Component, OnInit } from '@angular/core';
import { ProgressService } from '../services/progress.service';

@Component({
  selector: 'app-track-progress',
  templateUrl: './track-progress.component.html'
})
export class TrackProgressComponent implements OnInit {
  courseId: number = 1;
  progress: number = 0;

  constructor(private progressService: ProgressService) { }

  ngOnInit() {
    const studentId = 1;


    this.progressService.getProgress(studentId, this.courseId).subscribe((data: any) => {
      if (data) {
        this.progress = data.completedPercentage;
      }
    });
  }


  updateProgress() {
    const studentId = 1;

    this.progressService.trackProgress(studentId, this.courseId, this.progress).subscribe(() => {
      alert('Progress updated successfully');
    });
  }
}