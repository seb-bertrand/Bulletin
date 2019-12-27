import { Component, OnInit } from '@angular/core';
import { Report } from 'src/app/shared/models/report';
import { ActivatedRoute, Router } from '@angular/router';
import { ReportsService } from 'src/app/services/reports.service';

@Component({
  selector: 'app-reports-edit',
  templateUrl: './reports-edit.component.html',
  styleUrls: ['./reports-edit.component.css']
})
export class ReportsEditComponent implements OnInit {
  errorMessage = '';
  report: Report | undefined;
  constructor(private route: ActivatedRoute, private router: Router,
              private reportService: ReportsService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    const schoolClassId = this.route.snapshot.paramMap.get('schoolClassId');
    if (id) {
      this.getReportById(id);
    } else {
      this.report = new Report();
      if (schoolClassId) {
        this.report.rpSchoolClassId = schoolClassId;
      }
    }
  }

  getReportById(id: string) {
    this.reportService.getReportById(id).subscribe(
      report => this.report = report,
      error => this.errorMessage = error as any
    );
  }

  onSubmit() {
    this.reportService.upsertReport(this.report);
    this.onBack();
  }

  onBack() {
    this.router.navigate(['/classes', this.report.rpSchoolClassId]);
  }

}
