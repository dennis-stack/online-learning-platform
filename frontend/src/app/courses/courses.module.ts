import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CreateCourseComponent } from './create-course/create-course.component';
import { ApproveCourseComponent } from './approve-course/approve-course.component';
import { UploadMaterialComponent } from '../upload-material/upload-material.component';
import { TrackProgressComponent } from '../track-progress/track-progress.component';

@NgModule({
  declarations: [
    CreateCourseComponent,
    ApproveCourseComponent,
    UploadMaterialComponent,
    TrackProgressComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class CoursesModule { }