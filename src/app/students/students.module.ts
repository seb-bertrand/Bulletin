import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { StudentsListComponent } from './students-list/students-list.component';
import { StudentsEditComponent } from './students-edit/students-edit.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    StudentsListComponent,
    StudentsEditComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: 'classes/:schoolClassId/students/new', component: StudentsEditComponent },
      { path: 'students/edit/:id', component: StudentsEditComponent }
    ])
  ],
  exports : [
    StudentsListComponent,
    StudentsEditComponent
  ]
})
export class StudentsModule { }
