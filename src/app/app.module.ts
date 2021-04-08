import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ExerciseDetailComponent } from './exercise-detail/exercise-detail.component';
import { ExerciseListComponent } from './exercise-list/exercise-list.component';
import { CardComponent } from './exercise-list/card/card.component';
import { ExerciseAddComponent } from './exercise-add/exercise-add.component';
import { ExerciseEntryAddComponent } from './exercise-entry-add/exercise-entry-add.component';



@NgModule({
  declarations: [
    AppComponent,
    ExerciseDetailComponent,
    ExerciseListComponent,
    CardComponent,
    ExerciseAddComponent,
    ExerciseEntryAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production, registrationStrategy: 'registerImmediately' }),
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
