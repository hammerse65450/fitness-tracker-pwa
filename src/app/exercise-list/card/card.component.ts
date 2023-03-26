import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../../category';
import { Exercise } from '../../exercise';
import { db } from '../../../db/db';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

  category: Category | undefined;

  constructor() {
    this.exercise;
    this.category;
  }

  async getCategoryById(id: number) {
    return await db.categories.get(id);
  }

  ngOnInit(): void {
    this.getCategoryById(this.exercise?.categoryId!).then(
      (c) => (this.category = c)
    );
  }

  @Input() exercise: Exercise | undefined;
}
