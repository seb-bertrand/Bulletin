import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/shared/models/student';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-students-edit',
  templateUrl: './students-edit.component.html',
  styleUrls: ['./students-edit.component.css']
})
export class StudentsEditComponent implements OnInit {
  errorMessage = '';
  student: Student | undefined;
  constructor(private route: ActivatedRoute, private router: Router,
              private studentService: StudentService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    const schoolClassId = this.route.snapshot.paramMap.get('schoolClassId');
    if(id) {
      this.getStudentById(id);
    }
    else {
      this.student = new Student();      
      if(schoolClassId) {
        this.student.schoolClassId = schoolClassId;
      } 
    }
  }

  getStudentById(id: string) {
    this.studentService.getStudentById(id).subscribe(
      student => this.student = student,
      error => this.errorMessage = error as any
    );
  }

  onSubmit() {
    this.studentService.upsertStudent(this.student);
    this.onBack();
  }

  onBack() {
    	this.router.navigate(['/classes', this.student.schoolClassId]);    
  }
}
