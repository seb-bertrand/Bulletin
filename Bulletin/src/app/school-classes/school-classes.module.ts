import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { SchoolClassesListComponent } from './school-classes-list/school-classes-list.component';
import { SchoolClassesDetailsComponent } from './school-classes-details/school-classes-details.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SchoolClassesListComponent,
    SchoolClassesDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: 'classes', component: SchoolClassesListComponent },
      { path: 'classes/:id', component: SchoolClassesDetailsComponent }
    ])
  ],
  exports: [
    SchoolClassesListComponent,
    SchoolClassesDetailsComponent
  ]
})
export class SchoolClassesModule { }
