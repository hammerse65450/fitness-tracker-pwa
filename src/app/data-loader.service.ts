import { Injectable } from '@angular/core';
import { element } from 'protractor';
import { Observable, throwError } from 'rxjs';
import data from '../assets/json/data.json';
import { Exercise } from './exercise';
import { Category } from './category';


@Injectable({
  providedIn: 'root'
})

export class DataLoaderService {

  getData(){
    let exerciseData:Exercise[] = data;
    return exerciseData
  }


  cotainsObject(obj:any, list:{name:string, id:number}[]){
    var i;
    for (i = 0; i < list.length; i++) {
        if (list[i].name === obj.name) {
            return true;
        }
    }
    return false;
  }


  getCategories(){
    let categories:Category[] = [];

    data.forEach((elem: { category: Category; }) => {
      
      if(!this.cotainsObject(elem.category, categories)){
        categories.push(elem.category)
      }
      
    })

    return categories;
  }

  getExercisePerId(_id:number){

    let exercise:Exercise | undefined;
    let temp = data.find(i => i.id === _id);

    if(temp !== undefined){
      exercise = temp;
      
    } 
    return exercise;
  }
}
