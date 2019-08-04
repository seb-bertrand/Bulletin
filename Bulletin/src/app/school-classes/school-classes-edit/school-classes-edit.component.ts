import { Component, OnInit } from '@angular/core';
import { SchoolClass } from 'src/app/shared/models/school-class';
import { ActivatedRoute, Router } from '@angular/router';
import { SchoolClassService } from 'src/app/services/schoolClass.service';

@Component({
  selector: 'app-school-classes-edit',
  templateUrl: './school-classes-edit.component.html',
  styleUrls: ['./school-classes-edit.component.css']
})
export class SchoolClassesEditComponent implements OnInit {
  errorMessage = '';
  schoolClass: SchoolClass | undefined;
  constructor(private route: ActivatedRoute, private router: Router,
              private schoolClassService: SchoolClassService) {

}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.getSchoolClassById(id);
    } else {
      this.schoolClass = new SchoolClass();
    }
  }

  getSchoolClassById(id: string) {
    this.schoolClassService.getSchoolClassById(id).subscribe(
      schoolClass => this.schoolClass = schoolClass,
      error => this.errorMessage = error as any
    );
  }

  onSubmit() {
    this.schoolClassService.upsertSchoolClass(this.schoolClass);
    this.router.navigate(['/classes']);
  }

  onBack() {
    this.router.navigate(['/classes', this.schoolClass._id]);
  }

}
