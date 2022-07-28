/* (c) Copyright Bojan Mazej, all rights reserved. */

import { RemainderDividendQuotient, IRemainderDividendQuotient } from './RemainderDividendQuotient';

export interface ITimeUnits {
    seconds: IRemainderDividendQuotient;
    minutes: IRemainderDividendQuotient;
    hours: IRemainderDividendQuotient;
    days: IRemainderDividendQuotient;
    months: IRemainderDividendQuotient;
    years: IRemainderDividendQuotient;
}

export class TimeUnits implements ITimeUnits {
    constructor(
        public seconds = new RemainderDividendQuotient(),
        public minutes = new RemainderDividendQuotient(),
        public hours = new RemainderDividendQuotient(),
        public days = new RemainderDividendQuotient(),
        public months = new RemainderDividendQuotient(),
        public years = new RemainderDividendQuotient()
    ) {}
}
