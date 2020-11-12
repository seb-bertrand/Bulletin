import { Component, OnInit, Inject } from '@angular/core';
import { Subject } from 'src/app/shared/models/subject';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-subjects-edit',
  templateUrl: './subjects-edit.component.html',
  styleUrls: ['./subjects-edit.component.css']
})
export class SubjectsEditComponent implements OnInit {

  errorMessage = '';

  constructor(
    public dialogRef: MatDialogRef<SubjectsEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private subjectService: SubjectService) {}

  ngOnInit(): void {
    
  }

  onSubmit() {
    this.subjectService.upsertSubject(this.data.subject);
    this.dialogRef.close(this.data.subject);
  }
}
