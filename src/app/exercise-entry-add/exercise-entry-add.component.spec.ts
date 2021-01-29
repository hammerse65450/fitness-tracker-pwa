import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseEntryAddComponent } from './exercise-entry-add.component';

describe('ExerciseEntryAddComponent', () => {
  let component: ExerciseEntryAddComponent;
  let fixture: ComponentFixture<ExerciseEntryAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciseEntryAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseEntryAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
