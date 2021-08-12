import { Injectable } from '@angular/core';
import PouchDB from 'pouchdb';
import PouchDBFind from 'pouchdb-find';
import { Guid } from '../shared/tools/guid';
import { Observable } from 'rxjs';
import { Report } from '../shared/models/report';
import { SubjectService } from 'src/app/services/subject.service';

PouchDB.plugin(PouchDBFind);

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  private db: any;

  constructor(private subjectService: SubjectService) {
    this.db = new PouchDB('schoolClassesDB');
    this.db.createIndex({
      index: {
        fields: ['rpSchoolClassId']
      }
    });
  }

  getReportsBySchoolClassId(schoolClassId: string): Observable<Report[]> {
    const reports: Report[] = [];

    return new Observable<Report[]>(observer => {
        this.db.find( {
            selector: {
              rpSchoolClassId: schoolClassId
            },
            startkey: 'rp_',
            endkey: 'rp_\ufff0',
            include_docs: true
        }).then((results) => {
            results.docs.forEach(result => {
                reports.push(result);
            });
            observer.next(reports);
        });
    });
  }

  getReportById(id: string): Observable<Report | undefined> {
    return new Observable<Report | undefined>(observer => {
        this.db.get(id)
               .then((result) => {
                observer.next(result);
        });
    });
  }

  upsertReport(report: Report): void {
    if (report._id == null) {
        report._id = 'rp_' + Guid.newGuid();
    }
    this.db.put(report);
  }

  deleteReport(id: string): void {
    this.getReportById(id).subscribe(
        report => this.db.remove(report)
    );
  }

  deleteClassReports(schoolClassId: string): void {
    this.getReportsBySchoolClassId(schoolClassId).subscribe(
      reports => reports.forEach(report => {
        this.subjectService.deleteReportSubjects(report._id);
        this.db.remove(report._id, report._rev);
      })
    );
  }
}
