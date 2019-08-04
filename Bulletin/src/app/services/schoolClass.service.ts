import { Injectable } from '@angular/core';
import { SchoolClass } from 'src/app/shared/models/school-class';
import PouchDB from 'pouchdb-browser';
import PouchDBFind from 'pouchdb-find';
import { Guid } from '../shared/tools/guid';
import { Observable } from 'rxjs';
PouchDB.plugin(PouchDBFind);

@Injectable( {
    providedIn: 'root'
})
export class SchoolClassService {

    private db: any;

    constructor() {
        this.db = new PouchDB('schoolClassesDB');
    }

    getSchoolClasses(): Observable<SchoolClass[]> {
        const schoolClasses: SchoolClass[] = [];

        return new Observable<SchoolClass[]>(observer => {
            this.db.allDocs( {
                startkey: 'sc_',
                endkey: 'sc_\ufff0',
                include_docs: true
            }).then((results) => {
                results.forEach(result => {
                    schoolClasses.push(result.doc);
                });
                observer.next(schoolClasses);
            });
        });
    }

    getSchoolClassById(id: string): Observable<SchoolClass | undefined> {
        return new Observable<SchoolClass | undefined>(observer => {
            this.db.get(id)
                   .then((result) => {
                    observer.next(result.doc);
            });
        });
    }

    upsertSchoolClass(schoolClass: SchoolClass): void {
        if (schoolClass._id == null) {
            schoolClass._id = 'sc:' + Guid.newGuid();
        }
        this.db.put(schoolClass);
    }

    deleteSchoolClass(id: string): void {
        this.db.get(id).then(function(schoolClass: SchoolClass) {
            this.db.remove(schoolClass);
        });
    }
}
