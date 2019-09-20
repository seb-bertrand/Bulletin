import { Injectable } from '@angular/core';
import { Student } from 'src/app/shared/models/student';
import PouchDB from 'pouchdb-browser';
import PouchDBFind from 'pouchdb-find';
import { Guid } from '../shared/tools/guid';
import { Observable } from 'rxjs';
PouchDB.plugin(PouchDBFind);

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private db: any;

  constructor() {
      
      this.db = new PouchDB('schoolClassesDB');
      this.db.createIndex({
        index: {
          fields: ['schoolClassId']
        }
      });
  }

  getStudentsBySchoolClassId(schoolClassId: string): Observable<Student[]> {
    const students: Student[] = [];

    return new Observable<Student[]>(observer => {
        this.db.find( {
            selector: {
                schoolClassId: schoolClassId
            },
            startkey: 'st_',
            endkey: 'st_\ufff0',
            include_docs: true
        }).then((results) => {
            results.docs.forEach(result => {
                students.push(result);
            });
            observer.next(students);
        });
    });
  }

  getStudentById(id: string): Observable<Student | undefined> {
    return new Observable<Student | undefined>(observer => {
        this.db.get(id)
               .then((result) => {
                observer.next(result);
        });
    });
  }

  upsertStudent(student: Student): void {
    if (student._id == null) {
        student._id = 'st_' + Guid.newGuid();
    }
    this.db.put(student);
  }

  deleteStudent(id: string): void {
    this.getStudentById(id).subscribe(
        student => this.db.remove(student)
    );
  }

  deleteClassStudents(schoolClassId : string): void {
    this.getStudentsBySchoolClassId(schoolClassId).subscribe(
      students => students.forEach(student => {
        this.db.remove(student._id, student._rev);
      })
    );
  }
}
