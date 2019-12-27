import { Component, OnInit, Input } from '@angular/core';
import { ReportsService } from 'src/app/services/reports.service';
import { Report } from 'src/app/shared/models/report';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-reports-list',
  templateUrl: './reports-list.component.html',
  styleUrls: ['./reports-list.component.css']
})
export class ReportsListComponent implements OnInit {
  @Input() schoolClassId: string;
  schoolClassReports: Report[] | undefined;
  errorMessage = '';

  constructor(private reportService: ReportsService) { }

  ngOnInit() {
    if (this.schoolClassId) {
      this.getSchoolClassReports(this.schoolClassId);
    }
  }

  getSchoolClassReports(id: string) {
    this.reportService.getReportsBySchoolClassId(id).subscribe(
      reports => this.schoolClassReports = reports,
      error => this.errorMessage = error as any
    );
  }

  deleteStudent(id: string) {
      this.reportService.deleteReport(id);
      if (this.schoolClassId) {
        this.getSchoolClassReports(this.schoolClassId);
      }
  }


}
