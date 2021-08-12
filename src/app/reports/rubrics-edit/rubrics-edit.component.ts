import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { RubricsService } from 'src/app/services/rubrics.service';
import { Rubric } from 'src/app/shared/models/rubric';

@Component({
  selector: 'app-rubrics-edit',
  templateUrl: './rubrics-edit.component.html',
  styleUrls: ['./rubrics-edit.component.css']
})
export class RubricsEditComponent implements OnInit {

  @Input() subjectId: string;
  @Output() newRubricEvent = new EventEmitter<Rubric>();
  newRubric: Rubric  | undefined;;
  constructor(private rubricsService: RubricsService) { }

  ngOnInit(): void {
    this.newRubric = new Rubric();  
    this.newRubric.rbSubjectId = this.subjectId;
  }

  addNewRubric() {
    this.rubricsService.upsertRubric(this.newRubric);
    this.newRubricEvent.emit(this.newRubric);
    this.newRubric = new Rubric();
  }


}
