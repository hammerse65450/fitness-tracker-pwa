import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Category } from '../category';
import { Exercise } from '../exercise';
import { liveQuery } from 'dexie';
import { db } from '../../db/db';

@Component({
  selector: 'app-filter',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.scss'],
})
export class ExerciseListComponent implements OnInit {
  categories$: Category[] = [];
  data$: Exercise[] = [];
  origData$: Exercise[] = [];
  selectedCategories: number[] = [];

  constructor() {
    liveQuery(() => this.getCategories()).subscribe(
      (c) => (this.categories$ = c)
    );
    liveQuery(() => this.getExercises()).subscribe((e) => (this.data$ = e));
    liveQuery(() => this.getExercises()).subscribe((e) => (this.origData$ = e));
  }

  async getCategories() {
    return await db.categories.toArray();
  }

  async getExercises() {
    return await db.exercises.toArray();
  }

  ngOnInit(): void {}

  selectCategory(event: Event, elem: Category) {
    this.toggleClass(event.target);
    if (this.selectedCategories.includes(elem.id!)) {
      this.selectedCategories = this.selectedCategories.filter(
        (obj) => obj !== elem.id
      );
    } else {
      this.selectedCategories.push(elem.id!);
    }
    this.updateData();
  }

  updateData() {
    console.log(this.selectedCategories);
    if (this.selectedCategories.length > 0) {
      let filteredItems: Exercise[] = [];
      this.origData$.forEach((item) => {
        this.selectedCategories.forEach((category_id) => {
          if (item.categoryId == category_id) {
            filteredItems.push(item);
          }
        });
      });
      this.data$ = filteredItems;
    } else {
      this.data$ = this.origData$;
    }
  }

  toggleClass(target: any) {
    const hasClass = target.classList.contains('mat-chip-selected');
    if (hasClass) {
      target.classList.remove('mat-chip-selected');
    } else {
      target.classList.add('mat-chip-selected');
    }
  }
}
