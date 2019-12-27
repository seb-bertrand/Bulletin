import { Component, OnInit } from '@angular/core';
import { Report } from 'src/app/shared/models/report';
import { ActivatedRoute, Router } from '@angular/router';
import { ReportsService } from 'src/app/services/reports.service';

@Component({
  selector: 'app-reports-details',
  templateUrl: './reports-details.component.html',
  styleUrls: ['./reports-details.component.css']
})
export class ReportsDetailsComponent implements OnInit {
  errorMessage = '';
  report: Report | undefined;

  constructor(private route: ActivatedRoute, private router: Router,
              private reportService: ReportsService) {

  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.getReportById(id);
    }
  }

  getReportById(id: string) {
    this.reportService.getReportById(id).subscribe(
      report => this.report = report,
      error => this.errorMessage = error as any
    );
  }

  deleteReport(id: string) {
    this.reportService.deleteReport(id),
    this.onBack(); // TODO : called before the delete process has ended. Get a promise and wait for the delete to finish
  }

  onBack() {
    this.router.navigate(['/classes', this.report.rpSchoolClassId]);
  }

}
