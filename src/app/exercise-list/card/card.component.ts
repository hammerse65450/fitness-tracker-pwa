import { Component, Input, OnInit } from '@angular/core';
import { Exercise } from 'src/app/exercise';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { 
    this.exercise;
  }

  ngOnInit(): void {
  }
  
  @Input() exercise:Exercise | undefined;


  openExercise(id: any){

    console.log(id)

  }
}
