import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { SchoolClassesListComponent } from './school-classes-list/school-classes-list.component';
import { SchoolClassesDetailsComponent } from './school-classes-details/school-classes-details.component';
import { RouterModule } from '@angular/router';
import { SchoolClassesEditComponent } from './school-classes-edit/school-classes-edit.component';

@NgModule({
  declarations: [
    SchoolClassesListComponent,
    SchoolClassesDetailsComponent,
    SchoolClassesEditComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: 'classes', component: SchoolClassesListComponent },
      { path: 'classes/new', component: SchoolClassesEditComponent },
      { path: 'classes/:id', component: SchoolClassesDetailsComponent },
      { path: 'classes/edit/:id', component: SchoolClassesEditComponent }
    ])
  ],
  exports: [
    SchoolClassesListComponent,
    SchoolClassesDetailsComponent,
    SchoolClassesEditComponent
  ]
})
export class SchoolClassesModule { }
