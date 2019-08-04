import { Component, OnInit } from '@angular/core';
import { SchoolClass } from 'src/app/shared/models/school-class';
import { SchoolClassService } from 'src/app/services/schoolClass.service';

@Component({
  templateUrl: './school-classes-list.component.html',
  styleUrls: ['./school-classes-list.component.css']
})
export class SchoolClassesListComponent implements OnInit {
  errorMessage = '';
  schoolClasses: SchoolClass[] = [];
  filteredSchoolClasses: SchoolClass[] = [];

  // tslint:disable-next-line: variable-name
  _listFilter = '';
  get listFilter() {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredSchoolClasses = this.listFilter ? this.performFilter(this.listFilter) : this.schoolClasses;
  }

  constructor(private schoolClassService: SchoolClassService) { }

  ngOnInit() {
    this.getSchoolClasses();
  }

  getSchoolClasses() {
    this.schoolClassService.getSchoolClasses().subscribe(
      schoolClasses => {
        this.schoolClasses = schoolClasses;
        this.filteredSchoolClasses = this.schoolClasses;
      },
      error => this.errorMessage = error as any
    );
  }

  performFilter(filterBy: string) {
    filterBy = filterBy.toLocaleLowerCase();
    return this.schoolClasses.filter((schoolClass: SchoolClass) =>
    schoolClass.label.toLocaleLowerCase().indexOf(filterBy) !== -1
    );
  }

}
