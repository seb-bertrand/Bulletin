import { Component, OnInit } from '@angular/core';
import { SchoolClass } from 'src/app/shared/models/school-class';
import { ActivatedRoute, Router } from '@angular/router';
import { SchoolClassService } from 'src/app/services/schoolClass.service';

@Component({
  templateUrl: './school-classes-details.component.html',
  styleUrls: ['./school-classes-details.component.css']
})
export class SchoolClassesDetailsComponent implements OnInit {
  errorMessage = '';
  schoolClass: SchoolClass | undefined;

  constructor(private route: ActivatedRoute, private router: Router,
              private schoolClassService: SchoolClassService) {

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

  onBack() {
    this.router.navigate(['/classes']);
  }

}
