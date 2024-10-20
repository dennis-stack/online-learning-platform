import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveCourseComponent } from './approve-course.component';

describe('ApproveCourseComponent', () => {
  let component: ApproveCourseComponent;
  let fixture: ComponentFixture<ApproveCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApproveCourseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApproveCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
