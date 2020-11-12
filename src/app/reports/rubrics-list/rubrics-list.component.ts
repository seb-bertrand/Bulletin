import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rubrics-list',
  templateUrl: './rubrics-list.component.html',
  styleUrls: ['./rubrics-list.component.css']
})
export class RubricsListComponent implements OnInit {

  @Input() subjectId: string;
  constructor() { }

  ngOnInit(): void {
  }

}
