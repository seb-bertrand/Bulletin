export class Rubric {
    // tslint:disable-next-line: variable-name
    _id: string;
    // tslint:disable-next-line: variable-name
    _rev: string;
    rbTitle: string;
    rbSubjectId: string;

    constructor(rbTitle: string, rbSubjectId: string) {
        this.rbTitle = rbTitle;
        this.rbSubjectId = rbSubjectId;
    }
}
