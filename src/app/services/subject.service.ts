import { Injectable } from '@angular/core';
import PouchDB from 'pouchdb';
import PouchDBFind from 'pouchdb-find';
import { Guid } from '../shared/tools/guid';
import { Observable } from 'rxjs';
import { Subject } from '../shared/models/subject';
PouchDB.plugin(PouchDBFind);
 
@Injectable({
  providedIn: 'root'
})
export class SubjectService {
 
  private db: any;
 
  constructor() {
    this.db = new PouchDB('schoolClassesDB');
    this.db.createIndex({
      index: {
        fields: ['sbjReportId']
      }
    });
  }
 
  getSubjectsByReportId(reportId: string): Observable<Subject[]> {
    const subjects: Subject[] = [];
 
    return new Observable<Subject[]>(observer => {
        this.db.find( {
            selector: {
              sbjReportId: reportId
            },
            include_docs: true
        }).then((results) => {
            results.docs.forEach(result => {
              subjects.push(result);
            });
            observer.next(subjects);
        });
    });
  }
 
  getSubjectById(id: string): Observable<Subject | undefined> {
    return new Observable<Subject | undefined>(observer => {
        this.db.get(id)
               .then((result) => {
                observer.next(result);
        });
    });
  }
 
  upsertSubject(subject: Subject): void {
    if (subject._id == null) {
      subject._id = 'sbj_' + Guid.newGuid();
    }
    this.db.put(subject);
  }
 
  deleteSubject(id: string): void {
    this.getSubjectById(id).subscribe(
      subject => this.db.remove(subject)
    );
  }
 
  deleteReportSubjects(reportId: string): void {
    this.getSubjectsByReportId(reportId).subscribe(
      subjects => subjects.forEach(subject => {
        this.db.remove(subject._id, subject._rev);
      })
    );
  }
}