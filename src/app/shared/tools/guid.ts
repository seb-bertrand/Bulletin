export class Guid {

    private static guidPart(s: boolean) {
        const p = (Math.random().toString(16) + '000000000').substr(2, 8);
        return s ? '-' + p.substr(0, 4) + '-' + p.substr(4, 4) : p ;
    }

    static newGuid() {
        return Guid.guidPart(false) + Guid.guidPart(true) + Guid.guidPart(true) + Guid.guidPart(false);
    }
}
