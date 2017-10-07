import {cast, tnumber, type} from '../rtts';

export class RttsExample {
    @type
    static tnumberTest(@tnumber num: any) {
        return num;
    }

    @type
    static intCastTest(@cast('int') maybeNumber: any) {
        return maybeNumber;
    }

    @type
    static floatCastTest(@cast('float') maybeFloat: any) {
        return maybeFloat;
    }

}
