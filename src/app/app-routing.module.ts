import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExerciseAddComponent } from './exercise-add/exercise-add.component';
import { ExerciseDetailComponent } from './exercise-detail/exercise-detail.component';
import { ExerciseEntryAddComponent } from './exercise-entry-add/exercise-entry-add.component';
import { ExerciseListComponent } from './exercise-list/exercise-list.component';


const routes: Routes = [
  { path: '', component: ExerciseListComponent, data: {animation: 'Home'}},
  { path: 'exercise/:id', component: ExerciseDetailComponent, data: {animation: 'Detail'} },
  { path: 'create', component: ExerciseAddComponent },
  { path: 'exercise/addEntry/:id', component: ExerciseEntryAddComponent, data: {animation: 'AddEntry'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
