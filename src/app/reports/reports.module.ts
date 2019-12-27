import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ReportsListComponent } from './reports-list/reports-list.component';
import { ReportsDetailsComponent } from './reports-details/reports-details.component';
import { ReportsEditComponent } from './reports-edit/reports-edit.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ReportsListComponent,
    ReportsDetailsComponent,
    ReportsEditComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: 'classes/:schoolClassId/reports/new', component: ReportsEditComponent },
      { path: 'reports/edit/:id', component: ReportsEditComponent },
      { path: 'reports/:id', component: ReportsDetailsComponent }
    ])
  ],
  exports : [
    ReportsListComponent
  ]
})
export class ReportsModule { }
