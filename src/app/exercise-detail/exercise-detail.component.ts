import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataLoaderService } from '../data-loader.service';
import { Exercise } from '../exercise';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise-detail.component.html',
  styleUrls: ['./exercise-detail.component.scss']
})
export class ExerciseDetailComponent implements OnInit {

  exercise:Exercise | undefined;

  constructor(private service: DataLoaderService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get("id");
    if(id !== null){
      this.exercise = this.service.getExercisePerId(parseInt(id));
    }
    
  }

}
