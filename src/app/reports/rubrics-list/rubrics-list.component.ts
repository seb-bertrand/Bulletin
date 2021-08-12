import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { RubricsService } from 'src/app/services/rubrics.service';
import { Rubric } from 'src/app/shared/models/rubric';

@Component({
  selector: 'app-rubrics-list',
  templateUrl: './rubrics-list.component.html',
  styleUrls: ['./rubrics-list.component.css']
})
export class RubricsListComponent implements OnInit {

  @Input() subjectId: string;
  subjectRubrics: Rubric[] = [];
  rubri
  errorMessage = '';

  constructor(private rubricsService: RubricsService) { }

  ngOnInit(): void {
    if (this.subjectId) {
      this.getRubricsBySubjectId(this.subjectId);
    }
  }

  getRubricsBySubjectId(subjectId: string) {
    this.rubricsService.getRubricsBySubjectId(subjectId).subscribe(
      subjectRubrics => this.subjectRubrics = subjectRubrics,
      error => this.errorMessage = error as any
    );
  }

  deleteRubric(rubric: Rubric) {
    this.rubricsService.deleteRubric(rubric._id);
    
    var index = this.subjectRubrics.indexOf(rubric);
    if (index > -1) {
      this.subjectRubrics.splice(index, 1);
    }
  }

  addRubric(rubric: Rubric) {
    this.subjectRubrics.push(rubric);
  }

}
