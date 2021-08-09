import { Injectable } from '@angular/core';
import PouchDB from 'pouchdb';
import PouchDBFind from 'pouchdb-find';
import { Guid } from '../shared/tools/guid';
import { Observable, ObservedValuesFromArray } from 'rxjs';
import { Subject } from '../shared/models/subject';
import { Rubric } from '../shared/models/rubric';
PouchDB.plugin(PouchDBFind);

@Injectable({
  providedIn: 'root'
})
export class RubricsService {

  private db: any;

  constructor() { 
    this.db = new PouchDB('schoolClassesDB');
    this.db.createIndex({
      index: {
        fields: ['rbSubjectId']
      }
    });
  }

  getRubricsBySubjectId(subjectId: string): Observable<Rubric[]> {
    const rubrics: Rubric[] = [];
 
    return new Observable<Rubric[]>(observer => {
        this.db.find( {
            selector: {
              rbSubjectId: subjectId
            },
            include_docs: true
        }).then((results) => {
            results.docs.forEach(result => {
              rubrics.push(result);
            });
            observer.next(rubrics);
        });
    });
  }

  getRubricById(id: string): Observable<Rubric | undefined> {
    return new Observable<Rubric | undefined>(observer => {
        this.db.get(id)
               .then((result) => {
                observer.next(result);
        });
    });
  }

  upsertRubric(rubric: Rubric): void {
    if (rubric._id == null) {
      rubric._id = 'rb_' + Guid.newGuid();
    }
    this.db.put(rubric);
  }

  deleteRubric(id: string): void {
    this.getRubricById(id).subscribe(
      subject => this.db.remove(subject)
    );
  }

  deleteSubjectRubrics(subjectId: string): void {
    this.getRubricsBySubjectId(subjectId).subscribe(
      rubrics => rubrics.forEach(rubric => {
        this.db.remove(rubric._id, rubric._rev);
      })
    );
  }
}
