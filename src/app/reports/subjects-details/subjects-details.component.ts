import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Rubric } from 'src/app/shared/models/rubric';
import { RubricsListComponent } from '../rubrics-list/rubrics-list.component';

@Component({
  selector: 'app-subjects-details',
  templateUrl: './subjects-details.component.html',
  styleUrls: ['./subjects-details.component.css']
})
export class SubjectsDetailsComponent implements OnInit {

  @ViewChild(RubricsListComponent) rubricsListComponent: RubricsListComponent;
  @Input() subjectId: string;
  constructor() { }

  ngOnInit(): void {
  }

  addRubric(rubric: Rubric) {
    this.rubricsListComponent.addRubric(rubric);
  }

}
