import { Injectable } from '@angular/core';
import { SchoolClass } from 'src/app/shared/models/school-class';

@Injectable( {
    providedIn: 'root'
})
export class SchoolClassService {
    getSchoolClasses(): SchoolClass[] {
        return [
            {
                id: 1,
                label: 'Première primaire'
            },
            {
                id: 2,
                label: 'Deuxième primaire'
            },
            {
                id: 3,
                label: 'Troisème primaire'
            }
        ];
    }
}
