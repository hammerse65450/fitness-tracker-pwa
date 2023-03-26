import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Exercise } from '../exercise';
import { Location } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { db } from '../../db/db';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise-detail.component.html',
  styleUrls: ['./exercise-detail.component.scss'],
})
export class ExerciseDetailComponent implements OnInit {
  exercise: Exercise | undefined;

  constructor(private route: ActivatedRoute, private _location: Location) {}

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.getExerciseById(id).then((e) => (this.exercise = e));
    }
  }
  async getExerciseById(id: string) {
    return await db.exercises.get(parseInt(id));
  }

  backClicked() {
    this._location.back();
  }
}
