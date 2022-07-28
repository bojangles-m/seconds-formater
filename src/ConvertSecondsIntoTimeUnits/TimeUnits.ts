/* (c) Copyright Bojan Mazej, all rights reserved. */

import { RemainderDividendQuotientHolder, IRemainderDividendQuotientHolder } from './RemainderDividendQuotient';

export interface ITimeUnits {
    seconds: IRemainderDividendQuotientHolder;
    minutes: IRemainderDividendQuotientHolder;
    hours: IRemainderDividendQuotientHolder;
    days: IRemainderDividendQuotientHolder;
    months: IRemainderDividendQuotientHolder;
    years: IRemainderDividendQuotientHolder;
}

export class TimeUnits implements ITimeUnits {
    constructor(
        public seconds = new RemainderDividendQuotientHolder(),
        public minutes = new RemainderDividendQuotientHolder(),
        public hours = new RemainderDividendQuotientHolder(),
        public days = new RemainderDividendQuotientHolder(),
        public months = new RemainderDividendQuotientHolder(),
        public years = new RemainderDividendQuotientHolder()
    ) {}
}
