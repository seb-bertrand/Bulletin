import { Component, OnInit } from '@angular/core';
import { SchoolClass } from 'src/app/shared/models/school-class';
import { ActivatedRoute, Router } from '@angular/router';
import { SchoolClassService } from 'src/app/services/schoolClass.service';
import { StudentService } from 'src/app/services/student.service';
import { ReportsService } from 'src/app/services/reports.service';

@Component({
  templateUrl: './school-classes-details.component.html',
  styleUrls: ['./school-classes-details.component.css']
})
export class SchoolClassesDetailsComponent implements OnInit {
  errorMessage = '';
  schoolClass: SchoolClass | undefined;

  constructor(private route: ActivatedRoute, private router: Router,
              private schoolClassService: SchoolClassService,
              private studentService: StudentService,
              private reportService: ReportsService) {

  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.getSchoolClassById(id);
    }
  }

  getSchoolClassById(id: string) {
    this.schoolClassService.getSchoolClassById(id).subscribe(
      schoolClass => this.schoolClass = schoolClass,
      error => this.errorMessage = error as any
    );
  }

  deleteSchoolClass(id: string) {
    this.studentService.deleteClassStudents(id);
    this.reportService.deleteClassReports(id),
    this.schoolClassService.deleteSchoolClass(id);
    this.onBack(); // TODO : called before the delete process has ended. Get a promise and wait for the delete to finish
  }

  onBack() {
    this.router.navigate(['/classes']);
  }

}
