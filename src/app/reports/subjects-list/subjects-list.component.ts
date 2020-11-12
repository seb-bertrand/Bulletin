import { Component, OnInit, Input, Inject } from '@angular/core';
import { Subject } from 'src/app/shared/models/subject';
import { SubjectService } from 'src/app/services/subject.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { SubjectsEditComponent } from '../subjects-edit/subjects-edit.component';

 
@Component({
  selector: 'app-subjects-list',
  templateUrl: './subjects-list.component.html',
  styleUrls: ['./subjects-list.component.css']
})
export class SubjectsListComponent implements OnInit {
  @Input() reportId: string;
  reportSubjects: Subject[] = [];
  errorMessage = '';
 
  constructor(private subjectService: SubjectService, public dialog: MatDialog) { }
 
  ngOnInit() {
    if (this.reportId) {
      this.getSubjectsByReportId(this.reportId);
    }
  }
 
  getSubjectsByReportId(reportId: string) {
    this.subjectService.getSubjectsByReportId(reportId).subscribe(
      reportSubjects => this.reportSubjects = reportSubjects,
      error => this.errorMessage = error as any
    );
  }
 
  deleteSubject(subject: Subject) {
    this.subjectService.deleteSubject(subject._id);
    
    var index = this.reportSubjects.indexOf(subject);
    if (index > -1) {
      this.reportSubjects.splice(index, 1);
    }
  }
 
  addReportSubject() {
    if (!this.reportId) {
      return;
    }
    let subject = new Subject();
    subject.sbjReportId = this.reportId;

    const dialogRef = this.dialog.open(SubjectsEditComponent, {      
      data: { subject }
    });

    dialogRef.afterClosed().subscribe(newSubject => {
      if(newSubject?._id) {
        this.reportSubjects.push(newSubject);
      }
    });
  }

  updateReportSubject(subject: Subject) {
    const dialogRef = this.dialog.open(SubjectsEditComponent, {      
      data: { subject }
    });
  }
}