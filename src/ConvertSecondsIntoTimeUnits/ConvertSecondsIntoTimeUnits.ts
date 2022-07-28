/* (c) Copyright Bojan Mazej, all rights reserved. */

import { RemainderDividendQuotientHolder, remainderDividendQuotient } from './RemainderDividendQuotient';
import { ITimeUnits, TimeUnits } from './TimeUnits';

export interface IConvertSecondsIntoTimeUnits {
    get timeUnits(): ITimeUnits;
    convert(): this;
}

export const convertConvertSecondsIntoTimeUnits = (seconds: number): ITimeUnits => {
    const timeUnits = new TimeUnits();
    timeUnits.seconds = remainderDividendQuotient(Math.floor(seconds), 60);
    timeUnits.minutes = remainderDividendQuotient(timeUnits.seconds.quotient, 60);
    timeUnits.hours = remainderDividendQuotient(timeUnits.minutes.quotient, 24);
    timeUnits.days = remainderDividendQuotient(timeUnits.hours.quotient, 30);
    timeUnits.months = remainderDividendQuotient(timeUnits.days.quotient, 12);
    timeUnits.years = new RemainderDividendQuotientHolder(timeUnits.months.quotient);
    return timeUnits;
};
