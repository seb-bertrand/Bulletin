import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ReportsListComponent } from './reports-list/reports-list.component';
import { ReportsDetailsComponent } from './reports-details/reports-details.component';
import { ReportsEditComponent } from './reports-edit/reports-edit.component';
import { RouterModule } from '@angular/router';
import { SubjectsListComponent } from './subjects-list/subjects-list.component';
import { SubjectsEditComponent } from './subjects-edit/subjects-edit.component';
import { RubricsListComponent } from './rubrics-list/rubrics-list.component';
import { RubricsEditComponent } from './rubrics-edit/rubrics-edit.component';
import { SubjectsDetailsComponent } from './subjects-details/subjects-details.component';

@NgModule({
    declarations: [
        ReportsListComponent,
        ReportsDetailsComponent,
        ReportsEditComponent,
        SubjectsListComponent,
        SubjectsEditComponent,
        RubricsListComponent,
        RubricsEditComponent,
        SubjectsDetailsComponent
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
    exports: [
        ReportsListComponent
    ]
})
export class ReportsModule { }
