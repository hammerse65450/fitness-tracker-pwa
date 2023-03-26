import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataLoaderService } from '../data-loader.service';
import { Exercise } from '../exercise';
import { Location } from '@angular/common';
import { db } from '../../db/db';

@Component({
  selector: 'app-exercise-entry-add',
  templateUrl: './exercise-entry-add.component.html',
  styleUrls: ['./exercise-entry-add.component.scss'],
})
export class ExerciseEntryAddComponent implements OnInit {
  exercise: Exercise | undefined;

  constructor(
    private service: DataLoaderService,
    private route: ActivatedRoute,
    private _location: Location
  ) {}

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.getExerciseById(id).then((e) => (this.exercise = e));
    }
  }

  async getExerciseById(id: string) {
    return await db.exercises.get(parseInt(id));
  }

  increase() {
    if (this.exercise?.lastValue) {
      let intValue = parseInt(this.exercise.lastValue);

      intValue += 5;
      this.exercise.lastValue = String(intValue);
    }
  }

  decrease() {
    if (this.exercise?.lastValue) {
      let intValue = parseInt(this.exercise.lastValue);

      intValue -= 5;
      this.exercise.lastValue = String(intValue);
    }
  }

  saveValue() {
    db.exercises.update(this.exercise.id, {
      lastValue: this.exercise.lastValue,
    });
    this._location.back();
  }
}
