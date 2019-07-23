import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { SchoolClassesListComponent } from './school-classes-list/school-classes-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SchoolClassesListComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: 'classes', component: SchoolClassesListComponent },
    ])
  ],
  exports: [
    SchoolClassesListComponent
  ]
})
export class SchoolClassesModule { }
