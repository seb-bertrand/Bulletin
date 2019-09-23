import { Component, OnInit, Input } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { Student } from 'src/app/shared/models/student';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {
  @Input() schoolClassId: string;
  displayedColumns: string[] = ['lastName', 'firstName', 'editButton', 'deleteButton'];
  studentTableDataSource: MatTableDataSource<Student>;
  schoolClassStudents: Student[] | undefined;
  errorMessage = '';

  constructor(private studentService: StudentService) { }

  ngOnInit() {
    if (this.schoolClassId) {
      this.getSchoolClassStudents(this.schoolClassId);
    }
  }

  getSchoolClassStudents(id: string) {
    this.studentService.getStudentsBySchoolClassId(id).subscribe(
      students => this.studentTableDataSource = new MatTableDataSource(students),
      error => this.errorMessage = error as any
    );
  }

  deleteStudent(id: string) {
      this.studentService.deleteStudent(id);
      if (this.schoolClassId) {
        this.getSchoolClassStudents(this.schoolClassId);
      }
  }

}
