import { Component, OnInit } from '@angular/core';
import { SchoolClass } from 'src/app/shared/models/school-class';
import { SchoolClassService } from 'src/app/services/schoolClass.service';

@Component({
  selector: 'app-school-classes-list',
  templateUrl: './school-classes-list.component.html',
  styleUrls: ['./school-classes-list.component.css']
})
export class SchoolClassesListComponent implements OnInit {
  schoolClasses: SchoolClass[] = [];
  filteredSchoolClasses: SchoolClass[] = [];

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
    this.schoolClasses = this.schoolClassService.getSchoolClasses();
    this.filteredSchoolClasses = this.schoolClasses;
  }

  performFilter(filterBy: string) {
    filterBy = filterBy.toLocaleLowerCase();
    return this.schoolClasses.filter((schoolClass: SchoolClass) =>
    schoolClass.label.toLocaleLowerCase().indexOf(filterBy) !== -1
    );
  }

}
