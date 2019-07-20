import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { SchoolClassesListComponent } from './school-classes-list/school-classes-list.component';



@NgModule({
  declarations: [SchoolClassesListComponent],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    SchoolClassesListComponent
  ]
})
export class SchoolClassesModule { }
