/* (c) Copyright Bojan Mazej, all rights reserved. */

import { RemainderDividendQuotient } from './RemainderDividendQuotient';
import { ITimeUnits, TimeUnits } from './TimeUnits';

export interface IConvertSecondsIntoTimeUnits {
    get timeUnits(): ITimeUnits;
    convert(): this;
}

export class ConvertSecondsIntoTimeUnits implements IConvertSecondsIntoTimeUnits {
    private _timeUnits: ITimeUnits = new TimeUnits();

    constructor(private seconds: number) {}

    get timeUnits() {
        return this._timeUnits;
    }

    convert(): this {
        this._timeUnits.seconds = new RemainderDividendQuotient().calculate(Math.floor(this.seconds), 60);
        this._timeUnits.minutes = new RemainderDividendQuotient().calculate(this._timeUnits.seconds.quotient, 60);
        this._timeUnits.hours = new RemainderDividendQuotient().calculate(this._timeUnits.minutes.quotient, 24);
        this._timeUnits.days = new RemainderDividendQuotient().calculate(this._timeUnits.hours.quotient, 30);
        this._timeUnits.months = new RemainderDividendQuotient().calculate(this._timeUnits.days.quotient, 12);
        this._timeUnits.years = new RemainderDividendQuotient().setRemainder(this._timeUnits.months.quotient);

        return this;
    }
}
