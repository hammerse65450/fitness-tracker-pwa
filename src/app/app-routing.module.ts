import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExerciseDetailComponent } from './exercise-detail/exercise-detail.component';
import { ExerciseListComponent } from './exercise-list/exercise-list.component';


const routes: Routes = [
  { path: '', component: ExerciseListComponent },
  { path: 'exercise/:id', component: ExerciseDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
