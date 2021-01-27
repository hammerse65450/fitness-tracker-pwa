import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Category } from '../category';
import { DataLoaderService } from '../data-loader.service';
import { Exercise } from '../exercise';


@Component({
  selector: 'app-filter',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.scss'],
})
export class ExerciseListComponent implements OnInit {
  selected: any = [];
  constructor(service: DataLoaderService) {
    this.categories = service.getCategories();
    this.origData = service.getData();
    this.data = this.origData;
    this.selectedCategories = [];
  }
  data:Exercise[];
  categories: Category[];
  origData: Exercise[];
  selectedCategories: number[];
  ngOnInit(): void {}

  selectCategory(event:Event, elem:Category) {
    this.toggleClass(event.target);

    if (this.selectedCategories.includes(elem.id)) {
      this.selectedCategories = this.selectedCategories.filter(
        (obj) => obj !== elem.id
      );
    } else {
      this.selectedCategories.push(elem.id);
    }
    this.updateData();
  }

  updateData() {
    if (this.selectedCategories.length > 0) {
      let filteredItems:Exercise[] = [];
      this.origData.forEach((item) => {
        this.selectedCategories.forEach((category_id) => {
          if (item.category.id == category_id) {
            filteredItems.push(item);
          }
        });
      });
      this.data = filteredItems;
    }
    else{
      this.data = this.origData;
    }
  }

  toggleClass(target:any) {
    const hasClass = target.classList.contains('mat-chip-selected');
    if (hasClass) {
      target.classList.remove('mat-chip-selected');
    } else {
      target.classList.add('mat-chip-selected');
    }
  }
}
